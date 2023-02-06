package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.RegionResponseDto;
import com.ssafy.dmb.service.RegionService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/region")
@Tag(name = "Region", description = "region API 입니다.")
@RequiredArgsConstructor
public class RegionController {

    private final RegionService regionService;

    @Operation(summary = "지역 리스트 조회", description = " 여행지를 조회한다.")
    @GetMapping()
    public  List<RegionResponseDto> getRegionList() {
        return regionService.getRegionList();
    }

}
