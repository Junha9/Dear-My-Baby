package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.mediaconverter.AwsMediaConvertForm;
import com.ssafy.dmb.service.MediaConverterService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@Tag(name = "MediaConverter", description = "신경 안써도 됩니다.")
@RestController
public class MediaConverterController {

    private final MediaConverterService mediaConverterService;


    @PostMapping("/video/status")
    public String subConvertComplete(@RequestBody AwsMediaConvertForm form) {
        mediaConverterService.subConvertComplete(form);
        return null;
    }
}
