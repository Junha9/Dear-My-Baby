package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.location.Restaurant;
import com.ssafy.dmb.dto.recommend.RestaurantDetailResponseDto;
import com.ssafy.dmb.dto.recommend.RestaurantResponseDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final BabyRepository babyRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(TourService.class);

    public List<RestaurantResponseDto> getRecommendRestaurantList(Long familyId) {

        List<Baby> babyList = babyRepository.findByFamily(familyId);

        Set<String> favorites = new HashSet<>();
        for(Baby b: babyList){
            Set<String> favoriteFood = b.getFavoriteFood();
            favorites.addAll(favoriteFood);
        }

        List<Restaurant> restaurantList = restaurantRepository.findTourByFavoriteRestaurant(favorites);

        List<RestaurantResponseDto> restaurants = restaurantList.stream()
                .map(r -> new RestaurantResponseDto(r))
                .collect(Collectors.toList());

        return restaurants;

    }

    public RestaurantDetailResponseDto getRecommendRestaurantDetail(Long restaurantId) {

        Restaurant restaurantDetail = restaurantRepository.findById(restaurantId).
                orElseThrow(() -> new NoSuchElementException());

        return new RestaurantDetailResponseDto(restaurantDetail);

    }
}
