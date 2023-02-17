package com.ssafy.dmb.dto.record;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class RecordDto {

    private Long dayId;

    private String recordName;

    private String recordText;

    private String latitude;

    private String longitude;

    private int recordType;

}
