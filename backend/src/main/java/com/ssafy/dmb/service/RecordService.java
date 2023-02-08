package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.plan.Day;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.record.RecordChangeDto;
import com.ssafy.dmb.dto.record.RecordDetailResponseDto;
import com.ssafy.dmb.dto.record.RecordDto;
import com.ssafy.dmb.dto.record.RecordResponseDto;
import com.ssafy.dmb.repository.DayRepository;
import com.ssafy.dmb.repository.RecordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RecordService {

    private final RecordRepository recordRepository;
    private final DayRepository dayRepository;

    public List<RecordResponseDto> getDayRecordList(Long dayId, Long planId) {

        List<Record> recordList = recordRepository.findAllByDayId(dayId, planId);

        List<RecordResponseDto> dayRecordDtoList = recordList.stream()
                .map(r->new RecordResponseDto(r))
                .collect(Collectors.toList());

        return dayRecordDtoList;

    }

    public List<RecordResponseDto> getPlanRecordList(Long planId) {

        List<Record> recordList = recordRepository.findAllByPlanId(planId);

        List<RecordResponseDto> planRecordDtoList = recordList.stream()
                .map(r->new RecordResponseDto(r))
                .collect(Collectors.toList());

        return planRecordDtoList;

    }

    public RecordDetailResponseDto getRecord(Long recordId) {

        Record recordDetail = recordRepository.findById(recordId).
                orElseThrow(() -> new NoSuchElementException());

        RecordDetailResponseDto recordDetailResponseDto = new RecordDetailResponseDto(recordDetail);

        return recordDetailResponseDto;

    }

    public void saveRecord(String url, RecordDto recordDto) {

        Long dayId = recordDto.getDayId();

        Day day = dayRepository.findById(dayId).
                orElseThrow(() -> new NoSuchElementException());

        Coordinate recordCoordinate = new Coordinate(recordDto.getLatitude(), recordDto.getLongitude());

        Record record = Record.builder().
                day(day).
                recordType(recordDto.getRecordType()).
                recordName(recordDto.getRecordName()).
                recordText(recordDto.getRecordText()).
                recordCoordinate(recordCoordinate).
                recordDate(LocalDateTime.now()).
                fileUrl(url).
                build();

        recordRepository.save(record);

    }

    public void changeRecord(RecordChangeDto recordChangeDto) {

        Record foundRecord = recordRepository.findById(recordChangeDto.getRecordId()).get();

        foundRecord.setRecordText(recordChangeDto.getRecordText());
        foundRecord.setRecordName(recordChangeDto.getRecordName());

        recordRepository.save(foundRecord);

    }

    public void deleteRecord(Long recordId) {

        recordRepository.deleteById(recordId);

    }

}
