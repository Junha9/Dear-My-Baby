package com.ssafy.dmb.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.CommentResponseDto;
import com.ssafy.dmb.dto.RecordDetailResponseDto;
import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;
import com.ssafy.dmb.repository.DayRepository;
import com.ssafy.dmb.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RecordServiceImpl implements RecordService{

    private final Logger LOGGER = LoggerFactory.getLogger(RecordServiceImpl.class);

    private final RecordRepository recordRepository;
    private final DayRepository dayRepository;
    // local, development 등 현재 프로파일
    @Value("${spring.environment}")
    private String environment;

    // 파일이 저장되는 경로
    @Value("${spring.file-dir}")
    private String basicDir;
    private String fileDir;

    private final AmazonS3Client amazonS3Client;

    /**
     * 서버가 시작할 때 프로파일에 맞는 파일 경로를 설정해줌
     */
    @PostConstruct
    private void init(){
        if(environment.equals("local")){
            this.fileDir = System.getProperty("user.dir") + this.basicDir;
        } else if(environment.equals("development")){
            this.fileDir = this.basicDir;
        }
    }

    public String upload(MultipartFile multipartFile, String bucket, String dirName) throws IOException {
        File uploadFile = convert(multipartFile)  // 파일 변환할 수 없으면 에러
                .orElseThrow(() -> new IllegalArgumentException("error: MultipartFile -> File convert fail"));
        return upload(uploadFile, bucket, dirName);
    }

    // S3로 파일 업로드하기
    private String upload(File uploadFile, String bucket, String dirName) {
        String fileName = dirName + "/" + UUID.randomUUID() + uploadFile.getName();   // S3에 저장된 파일 이름
        String uploadImageUrl = putS3(uploadFile, bucket, fileName); // s3로 업로드
        removeNewFile(uploadFile);
        return uploadImageUrl;
    }

    // S3로 업로드
    private String putS3(File uploadFile, String bucket, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(CannedAccessControlList.PublicRead));
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    // 로컬에 저장된 이미지 지우기
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("File delete success");
            return;
        }
        log.info("File delete fail");
    }

    /**
     * @param multipartFile
     * 로컬에 파일 저장하기
     */
    private Optional<File> convert(MultipartFile multipartFile) throws IOException {
        if (multipartFile.isEmpty()) {
            return Optional.empty();
        }

        String originalFilename = multipartFile.getOriginalFilename();
        String storeFileName = createStoreFileName(originalFilename);

        //파일 업로드
        File file = new File(fileDir+storeFileName);
        multipartFile.transferTo(file);

        return Optional.of(file);
    }

    /**
     * @description 파일 이름이 이미 업로드된 파일들과 겹치지 않게 UUID를 사용한다.
     * @param originalFilename 원본 파일 이름
     * @return 파일 이름
     */
    private String createStoreFileName(String originalFilename) {
        String ext = extractExt(originalFilename);
        String uuid = UUID.randomUUID().toString();
        return uuid + "." + ext;
    }

    /**
     * @description 사용자가 업로드한 파일에서 확장자를 추출한다.
     *
     * @param originalFilename 원본 파일 이름
     * @return 파일 확장자
     */
    private String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }

    @Override
    public List<RecordResponseDto> getDayRecordList(Long dayId, Long planId) {
        LOGGER.info("[getDayRecordList] input dayId: {}", dayId);
        List<Record> recordList = recordRepository.findAllByDayId(dayId, planId);

        List<RecordResponseDto> dayRecordDtoList = recordList.stream()
                .map(r->new RecordResponseDto(r))
                .collect(Collectors.toList());

        return dayRecordDtoList;
    }

    @Override
    public List<RecordResponseDto> getPlanRecordList(Long planId) {
        LOGGER.info("[getPlanRecordList] input planId: {}", planId);
        List<Record> recordList = recordRepository.findAllByPlanId(planId);

        List<RecordResponseDto> planRecordDtoList = recordList.stream()
                .map(r->new RecordResponseDto(r))
                .collect(Collectors.toList());

        return planRecordDtoList;
    }

    @Override
    public RecordDetailResponseDto getRecord(Long recordId) {
        Record recordDetail = recordRepository.findById(recordId).
                orElseThrow(() -> new NoSuchElementException());

        RecordDetailResponseDto recordDetailResponseDto = new RecordDetailResponseDto(recordDetail);
        System.out.println(recordDetailResponseDto.toString());
//        List<Comment> commentList = recordDetail.getComments();
//        List<CommentResponseDto> comments = commentList.stream()
//                .map(c->new CommentResponseDto(c))
//                .collect(Collectors.toList());
//
//        recordDetailResponseDto.setComments(comments);

        return recordDetailResponseDto;
    }

    @Override
    public void saveRecord(String url, RecordDto recordDto) {
        LOGGER.info("[saveRecord] input dto: {}", recordDto);
        Long dayId = recordDto.getDayId();

        Day day = dayRepository.findById(dayId).
                orElseThrow(() -> new NoSuchElementException());

        Coordinate recordCoordinate = new Coordinate(recordDto.getLatitude(), recordDto.getLongitude());

        Record record = Record.builder().
                day(day).
                recordType(recordDto.getRecordType()).
                recordFile(recordDto.getRecordFile()).
                recordText(recordDto.getRecordText()).
                recordCoordinate(recordCoordinate).
                fileUrl(url).
                build();

        Record recordResponse = recordRepository.save(record);
        // 뭐가 필요한지 말해라 front

    }

    @Override
    public RecordResponseDto changeRecordText(Long recordId, String recordText) {
        Record foundRecord = recordRepository.findById(recordId).get();
        foundRecord.setRecordText(recordText);
        recordRepository.save(foundRecord);

        return null;
    }

    @Override
    public void deleteRecord(Long recordId) {
        recordRepository.deleteById(recordId);
    }
}
