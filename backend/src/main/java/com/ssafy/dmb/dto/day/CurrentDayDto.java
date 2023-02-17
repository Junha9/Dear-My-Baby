package com.ssafy.dmb.dto.day;

import com.ssafy.dmb.domain.location.Place;
import com.ssafy.dmb.domain.plan.Day;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Data
public class CurrentDayDto {
    private Long dayId;

    private int dayNumber;

    private int currentDay;

    private int planPeriod;

    private Long planId;

    private List<PlaceResponseDto> places;

    public CurrentDayDto(Day day, int currentDay){
        this.dayNumber = day.getDayNumber();
        this.dayId = day.getId();
        this.currentDay = currentDay;
        this.planId = day.getPlan().getId();
        this.planPeriod = day.getPlan().getPlanPeriod();
        this.places = day.getPlaces().stream()
                .map(d->new PlaceResponseDto(d))
                .collect(Collectors.toList());
    }

    public CurrentDayDto(int currentDay){
        this.currentDay = currentDay;
    }

    public List<Place> PlaceDtoToPlaceEntity(List<PlaceResponseDto> place){
        return place.stream()
                .map(PlaceResponseDto::toEntity)
                .collect(Collectors.toList());
    }
}
