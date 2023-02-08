package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.recommend.RestaurantDetailResponseDto;
import com.ssafy.dmb.dto.recommend.RestaurantResponseDto;
import com.ssafy.dmb.service.RestaurantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/retaurant")
@Tag(name = "Restaurant", description = "restaurant API 입니다.")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @Operation(summary = "추천 식당 조회", description = "<strong> familyId </strong>를 통해 추천 식당 조회한다.")
    @GetMapping()
    public  List<RestaurantResponseDto> getRecommendRestaurantList(@RequestParam("familyId") Long familyId) {

        return restaurantService.getRecommendRestaurantList(familyId);

    }

    @Operation(summary = "추천 식당 단일 조회", description = "<strong> familyId </strong>를 통해 추천식당 단일 조회한다.")
    @GetMapping("/detail")
    public RestaurantDetailResponseDto getRecommendRestaurantDetail(@RequestParam("restaurantId") Long restaurantId){

        return restaurantService.getRecommendRestaurantDetail(restaurantId);

    }

}
