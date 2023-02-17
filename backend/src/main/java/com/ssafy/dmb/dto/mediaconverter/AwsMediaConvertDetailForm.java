package com.ssafy.dmb.dto.mediaconverter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class AwsMediaConvertDetailForm {
    private String status;
    private com.ssafy.dmb.dto.mediaconverter.AwsMediaConvertDetailUserMetadataForm userMetadata;
    private com.ssafy.dmb.dto.mediaconverter.AwsMediaConvertJobProgressForm jobProgress;
    private List<com.ssafy.dmb.dto.mediaconverter.AwsMediaConvertOutputGroupDetail> outputGroupDetails;
}
