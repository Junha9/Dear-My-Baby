package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.record.RecordDetailResponseDto;
import com.ssafy.dmb.dto.record.RecordDto;
import com.ssafy.dmb.dto.record.RecordResponseDto;
import com.ssafy.dmb.service.RecordService;
import com.ssafy.dmb.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/record")
public class RecordController {
    private final RecordService recordService;
    private final S3Service s3Service;

    @PostMapping()
    public String saveRecord(@RequestPart MultipartFile multipartFile
            , @RequestPart RecordDto recordDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        recordService.saveRecord(url, recordDto);
        return url;
    }

    @GetMapping("/day")
    public List<RecordResponseDto> getDayRecordList(@RequestParam("dayId") Long dayId, @RequestParam("planId") Long planId ) throws IOException {
        return recordService.getDayRecordList(dayId, planId);
    }

    @GetMapping("/plan")
    public List<RecordResponseDto> getPlanRecordList(@RequestParam("planId") Long planId) throws IOException {
        return recordService.getPlanRecordList(planId);
    }

    @GetMapping("/detail")
    public RecordDetailResponseDto getRecord(@RequestParam("recordId") Long recordId) throws IOException {
        return recordService.getRecord(recordId);
    }

    @DeleteMapping()
    public void deleteRecord(@RequestParam("recordId") Long recordId) throws IOException {
        recordService.deleteRecord(recordId);
    }

    @PutMapping()
    public void changeRecordText(@RequestParam("recordId") Long recordId, @RequestParam("recordText") String recordText) throws IOException {
        recordService.changeRecordText(recordId, recordText);
    }

}
