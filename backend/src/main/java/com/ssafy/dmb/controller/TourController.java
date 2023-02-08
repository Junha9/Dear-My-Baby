package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.TourDetailResponseDto;
import com.ssafy.dmb.dto.recommend.TourResponseDto;
import com.ssafy.dmb.service.TourService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tour")
@Tag(name = "Tour", description = "tour API 입니다.")
@RequiredArgsConstructor
public class TourController {

    private final TourService tourService;

    @Operation(summary = "여행 리스트 추천", description = "<strong> familyId </strong>를 통해 여행지 리스트를 조회한다.")
    @GetMapping()
    public  List<TourResponseDto> getRecommendTourList(@RequestParam("familyId") Long familyId) {

        return tourService.getRecommendTourList(familyId);

    }

    @Operation(summary = "추천 여행지 단일 조회", description = "<strong> tourId </strong>를 통해 추천 여행지를 조회한다.")
    @GetMapping("/detail")
    public TourDetailResponseDto getRecommendTourDetail(@RequestParam("tourId") Long tourId){

        return tourService.getRecommendTourDetail(tourId);

    }

}
