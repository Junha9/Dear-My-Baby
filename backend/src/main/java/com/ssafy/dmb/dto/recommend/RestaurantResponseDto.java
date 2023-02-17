package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RestaurantResponseDto {
    private Long restaurantId;

    private String restaurantName;

    private String restaurantMeinMenu;

    private String restaurantImgUrl;
    public RestaurantResponseDto(Restaurant restaurant) {
        this.restaurantId = restaurant.getId();
        this.restaurantName = restaurant.getRestaurantName();
        this.restaurantMeinMenu = restaurant.getRestaurantMainMenu();
        this.restaurantImgUrl = restaurant.getRestaurantImgUrl();
    }

}
