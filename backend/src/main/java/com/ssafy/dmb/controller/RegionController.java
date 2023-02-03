package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.RegionResponseDto;
import com.ssafy.dmb.service.RegionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/region")
@RequiredArgsConstructor
public class RegionController {

    private final RegionService regionService;

    @GetMapping()
    public  List<RegionResponseDto> getRegionList() {
        return regionService.getRegionList();
    }

}
