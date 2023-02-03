package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.location.Festival;
import com.ssafy.dmb.dto.recommend.FestivalDetailResponseDto;
import com.ssafy.dmb.dto.recommend.FestivalResponseDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.repository.FestivalRepository;
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
public class FestivalService {
    private final FestivalRepository festivalRepository;
    private final BabyRepository babyRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(FestivalRepository.class);

    public List<FestivalResponseDto> getRecommendFestivalList(Long familyId, Long RegionId) {
        List<Baby> babyList = babyRepository.findByFamily(familyId);
        Set<String> favorites = new HashSet<>();
        for(Baby b: babyList){
            Set<String> favoriteSpot = b.getFavoriteSpot();
            favorites.addAll(favoriteSpot);
        }

        List<Festival> festivalList = festivalRepository.findFestivalByFavoriteSpot(favorites);

        List<FestivalResponseDto> festivals = festivalList.stream()
                .map(f -> new FestivalResponseDto(f))
                .collect(Collectors.toList());

        return festivals;
    }

    public FestivalDetailResponseDto getRecommendFestivalDetail(Long festivalId) {
        LOGGER.info("[getRecommendFestivalDetail] input tourId: {}", festivalId);
        Festival festivalDetail = festivalRepository.findById(festivalId).
                orElseThrow(() -> new NoSuchElementException());

        //생성자 사용 entity to DTO
        FestivalDetailResponseDto festivalDetailResponseDto = new FestivalDetailResponseDto(festivalDetail);

        return festivalDetailResponseDto;
    }
}
