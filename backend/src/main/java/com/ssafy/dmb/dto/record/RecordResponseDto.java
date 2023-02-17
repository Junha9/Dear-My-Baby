package com.ssafy.dmb.dto.record;

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

    private Long recordId;

    private Long dayId;

    private String recordName;

    private String recordText;

    private String latitude;

    private String longitude;

    private int recordType;

    private String fileUrl;

    private LocalDateTime recordDate;

    public RecordResponseDto(Record record){
        recordId = record.getId();
        dayId = record.getDay().getId();
        recordName = record.getRecordName();
        recordType = record.getRecordType();
        fileUrl = record.getFileUrl();
        recordDate = record.getRecordDate();
        recordText = record.getRecordText();
        Coordinate coordinate = record.getRecordCoordinate();
        latitude = coordinate.getLatitude();
        longitude = coordinate.getLongitude();
    }

}
