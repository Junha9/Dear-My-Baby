package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.FestivalDetailResponseDto;
import com.ssafy.dmb.dto.recommend.FestivalResponseDto;
import com.ssafy.dmb.service.FestivalService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/festival")
@Tag(name = "Festival", description = "festival API 입니다.")
@RequiredArgsConstructor
public class FestivalController {

    private final FestivalService festivalService;

    @Operation(summary = "축제 추천 리스트 조회", description = "<strong> familyId </strong>를 통해 추천 축제 리스트을 조회한다.")
    @GetMapping()
    public  List<FestivalResponseDto> getRecommendFestivalList(@RequestParam("familyId") Long familyId) {

        return festivalService.getRecommendFestivalList(familyId);

    }
    @Operation(summary = "추천 축제 단일 조회", description = "<strong> festival </strong>를 통해 추천 축제 정보를 조회한다.")
    @GetMapping("/detail")
    public FestivalDetailResponseDto getRecommendFestivalDetail(@RequestParam("festivalId") Long festivalId){

        return festivalService.getRecommendFestivalDetail(festivalId);

    }

}
