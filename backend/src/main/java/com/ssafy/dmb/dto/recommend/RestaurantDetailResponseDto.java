package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RestaurantDetailResponseDto {
    // 식당명
    private String restaurantName;

    // 식당 카테고리
    private String restaurantCategory;

    // 식당 주소
    private String restaurantAddress;

    // 식당 위도
    private String restaurantLatitude;

    // 식당 경도
    private String restaurantLongitude;

    // 식당 개요
    private String restaurantOutline;

    // 식당 문의 전화번호
    private String restaurantPhoneNumber;

    // 식당 주차 가능 여부
    private String restaurantAvlParking;

    // 식당 영업시간
    private String restaurantOpeningHours;

    // 식당 휴무일
    private String restaurantClosedDay;

    // 식당 메인메뉴
    private String restaurantMainMenu;

    // 식당 img
    private String restaurantImgUrl;

    private Long regionId;
    public RestaurantDetailResponseDto(Restaurant restaurant) {
        this.regionId = restaurant.getRegion().getId();
        this.restaurantName = restaurant.getRestaurantName();
        this.restaurantCategory = restaurant.getRestaurantCategory();
        this.restaurantAddress = restaurant.getRestaurantAddress();
        this.restaurantLatitude = restaurant.getRestaurantLatitude();
        this.restaurantLongitude = restaurant.getRestaurantLongitude();
        this.restaurantOutline = restaurant.getRestaurantOutline();
        this.restaurantPhoneNumber = restaurant.getRestaurantPhoneNumber();
        this.restaurantAvlParking = restaurant.getRestaurantAvlParking();
        this.restaurantOpeningHours = restaurant.getRestaurantOpeningHours();
        this.restaurantClosedDay = restaurant.getRestaurantClosedDay();
        this.restaurantMainMenu = restaurant.getRestaurantMainMenu();
        this.restaurantImgUrl = restaurant.getRestaurantImgUrl();
    }
}
