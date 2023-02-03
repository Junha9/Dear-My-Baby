package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.location.Tour;
import com.ssafy.dmb.dto.recommend.TourDetailResponseDto;
import com.ssafy.dmb.dto.recommend.TourResponseDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.repository.TourRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TourService {
    private final TourRepository tourRepository;
    private final BabyRepository babyRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(TourService.class);

    public List<TourResponseDto> getRecommendTourList(Long familyId, Long RegionId) {
        List<Baby> babyList = babyRepository.findByFamily(familyId);
        Set<String> favorites = new HashSet<>();
        for(Baby b: babyList){
            Set<String> favoriteSpot = b.getFavoriteSpot();
            favorites.addAll(favoriteSpot);
        }
        
        List<Tour> tourList = tourRepository.findTourByFavoriteSpot(favorites);

        List<TourResponseDto> tours = tourList.stream()
                .map(t -> new TourResponseDto(t))
                .collect(Collectors.toList());

        return tours;
    }

    public TourDetailResponseDto getRecommendTourDetail(Long tourId) {
        LOGGER.info("[getRecommendTourList] input tourId: {}", tourId);
        Tour tourDetail = tourRepository.findById(tourId).
                orElseThrow(() -> new NoSuchElementException());

        //생성자 사용 entity to DTO
        TourDetailResponseDto tourDetailResponseDto = new TourDetailResponseDto(tourDetail);

        return tourDetailResponseDto;
    }
}
