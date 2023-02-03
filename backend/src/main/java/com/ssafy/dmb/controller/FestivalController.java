package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.FestivalDetailResponseDto;
import com.ssafy.dmb.dto.recommend.FestivalResponseDto;
import com.ssafy.dmb.service.FestivalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/festival")
@RequiredArgsConstructor
public class FestivalController {

    private final FestivalService festivalService;

    @GetMapping()
    public  List<FestivalResponseDto> getRecommendFestivalList(@RequestParam("familyId") Long familyId, @RequestParam("regionId") Long regionId) {
        return festivalService.getRecommendFestivalList(familyId, regionId);
    }

    @GetMapping("/detail")
    public FestivalDetailResponseDto getRecommendFestivalDetail(@RequestParam("festivalId") Long festivalId){
        return festivalService.getRecommendFestivalDetail(festivalId);
    }

}
