package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.RecordDetailResponseDto;
import com.ssafy.dmb.dto.RecordDto;
import com.ssafy.dmb.dto.RecordResponseDto;

import java.util.List;

public interface RecordService {
    List<RecordResponseDto> getDayRecordList(Long dayId, Long planId);

    List<RecordResponseDto> getPlanRecordList(Long planId);

    RecordDetailResponseDto getRecord(Long recordId);

    void saveRecord(String url, RecordDto recordDto);

    RecordResponseDto changeRecordText(Long recordId, String recordText);

    void deleteRecord(Long recordId);
}
