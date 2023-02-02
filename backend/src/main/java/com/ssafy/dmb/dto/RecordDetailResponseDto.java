package com.ssafy.dmb.dto;

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
    // record pk
    private Long recordId;
    // 몇일차껀지
//    private Long dayId;
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

    private List<CommentResponseDto> comments;

    public RecordDetailResponseDto(Record record){
        this.recordId = record.getId();
//        dayId = record.getDay().getId();
        this.recordFile = record.getRecordFile();
        this.recordType = record.getRecordType();
        this.fileUrl = record.getFileUrl();
        this.recordDate = record.getRecordDate();

        Coordinate coordinate = record.getRecordCoordinate();
        this.latitude = coordinate.getLatitude();
        this.longitude = coordinate.getLongitude();

        this.comments = record.getComments().stream()
                .map(c->new CommentResponseDto(c))
                .collect(Collectors.toList());
    }

    @Override
    public String toString() {
        return "RecordDetailResponseDto{" +
                "recordId=" + recordId +
                ", recordFile='" + recordFile + '\'' +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                ", recordType=" + recordType +
                ", fileUrl='" + fileUrl + '\'' +
                ", recordDate=" + recordDate +
                ", comments=" + comments +
                '}';
    }
}
