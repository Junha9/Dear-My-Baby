package com.ssafy.dmb.dto.mediaconverter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class AwsMediaConvertJobProgressForm {
    private String currentPhase;
    private int jobPercentComplete;
}
