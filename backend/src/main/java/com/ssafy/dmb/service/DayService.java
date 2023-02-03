package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.location.Place;
import com.ssafy.dmb.dto.day.DayDto;
import com.ssafy.dmb.dto.day.PlaceResponseDto;
import com.ssafy.dmb.repository.DayRepository;
import com.ssafy.dmb.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DayService {
    private final Logger LOGGER = LoggerFactory.getLogger(DayService.class);
    private final DayRepository dayRepository;
    private final PlaceRepository placeRepository;

    public void saveDay(DayDto dayDto) {
        LOGGER.info("[dayDto] input dto: {}", dayDto);

        placeRepository.deleteByDayId(dayDto.getDayId());

        List<PlaceResponseDto> placeList = dayDto.getPlaces();
        // placeDto list를 entity list로 변환
        List<Place> places = dayDto.PlaceDtoToPlaceEntity(placeList);

        for(Place p: places) {
            p.setDay(dayRepository.findById(dayDto.getDayId()).get());
            placeRepository.save(p);
        }
    }

    public List<PlaceResponseDto> getDayPlaceList(Long dayId) {
        LOGGER.info("[getDayPlaceList] input dayId: {}", dayId);
        List<Place> placeList = placeRepository.findAllByDayId(dayId);

        List<PlaceResponseDto> places = placeList.stream()
                .map(p->new PlaceResponseDto(p))
                .collect(Collectors.toList());

        return places;
    }

}
