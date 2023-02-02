package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.mediaconverter.AwsMediaConvertForm;
import com.ssafy.dmb.service.MediaConverterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MediaConverterController {

    private final MediaConverterService mediaConverterService;
    @PostMapping("/video/status")
    public String subConvertComplete(@RequestBody AwsMediaConvertForm form) {
        mediaConverterService.subConvertComplete(form);
        return null;
    }
}
