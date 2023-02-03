package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.RestaurantDetailResponseDto;
import com.ssafy.dmb.dto.recommend.RestaurantResponseDto;
import com.ssafy.dmb.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/retaurant")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping()
    public  List<RestaurantResponseDto> getRecommendRestaurantList(@RequestParam("familyId") Long familyId, @RequestParam("regionId") Long regionId) {
        return restaurantService.getRecommendRestaurantList(familyId, regionId);
    }

    @GetMapping("/detail")
    public RestaurantDetailResponseDto getRecommendRestaurantDetail(@RequestParam("restaurantId") Long restaurantId){
        return restaurantService.getRecommendRestaurantDetail(restaurantId);
    }

}
