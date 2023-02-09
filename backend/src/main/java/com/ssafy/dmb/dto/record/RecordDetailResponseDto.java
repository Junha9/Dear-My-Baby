package com.ssafy.dmb.dto.record;

import com.ssafy.dmb.domain.location.Coordinate;
import com.ssafy.dmb.domain.record.Record;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RecordDetailResponseDto {

    private Long recordId;

    private String recordName;

    private String recordText;

    private String latitude;

    private String longitude;

    private int recordType;

    private String fileUrl;

    private LocalDateTime recordDate;

    private List<RecordDetailCommentDto> comments;

    public RecordDetailResponseDto(Record record){
        this.recordId = record.getId();
        this.recordName = record.getRecordName();
        this.recordType = record.getRecordType();
        this.fileUrl = record.getFileUrl();
        this.recordDate = record.getRecordDate();
        this.recordText = record.getRecordText();
        Coordinate coordinate = record.getRecordCoordinate();
        this.latitude = coordinate.getLatitude();
        this.longitude = coordinate.getLongitude();

        this.comments = record.getComments().stream()
                .map(c->new RecordDetailCommentDto(c))
                .collect(Collectors.toList());
    }

    @Override
    public String toString() {
        return "RecordDetailResponseDto{" +
                "recordId=" + recordId +
                ", recordName='" + recordName + '\'' +
                ", recordText='" + recordText + '\'' +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                ", recordType=" + recordType +
                ", fileUrl='" + fileUrl + '\'' +
                ", recordDate=" + recordDate +
                ", comments=" + comments +
                '}';
    }

}
