package com.ssafy.dmb.dto.record;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class RecordChangeDto {


    private Long recordId;

    private String recordName;

    private String recordText;

}
