package com.ssafy.dmb.dto.record;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class RecordDto {

    // recordID
    private Long dayId;
    // 서버에서 생성한 파일 이름
    private String recordFile;
    // 이미지, 영상과 함께 오는 text
    private String recordText;

    private String latitude;

    private String longitude;

    private int recordType;
}
