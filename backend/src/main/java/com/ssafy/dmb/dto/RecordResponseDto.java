package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.record.Record;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RecordResponseDto {
    // record pk
    private Long recordId;
    // 몇일차껀지
    private Long dayId;
    // 서버에서 생성한 파일 이름
    private String recordFile;
    // 위도
    private String latitude;
    // 경도
    private String longitude;
    // 파일 타입
    private int recordType;
    // 저장 url
    private String fileUrl;
    // record 시간
    private LocalDateTime recordDate;

    public RecordResponseDto(Record record){
        recordId = record.getId();
        dayId = record.getDay().getId();
        recordFile = record.getRecordFile();
        recordType = record.getRecordType();
        fileUrl = record.getFileUrl();
        recordDate = record.getRecordDate();

        Coordinate coordinate = record.getRecordCoordinate();
        latitude = coordinate.getLatitude();
        longitude = coordinate.getLongitude();
    }
}
