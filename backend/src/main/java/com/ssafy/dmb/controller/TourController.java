package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.TourDetailResponseDto;
import com.ssafy.dmb.dto.recommend.TourResponseDto;
import com.ssafy.dmb.service.TourService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tour")
@RequiredArgsConstructor
public class TourController {

    private final TourService tourService;

    @GetMapping()
    public  List<TourResponseDto> getRecommendTourList(@RequestParam("familyId") Long familyId, @RequestParam("regionId") Long regionId) {
        return tourService.getRecommendTourList(familyId, regionId);
    }

    @GetMapping("/detail")
    public TourDetailResponseDto getRecommendTourDetail(@RequestParam("tourId") Long tourId){
        return tourService.getRecommendTourDetail(tourId);
    }

}
