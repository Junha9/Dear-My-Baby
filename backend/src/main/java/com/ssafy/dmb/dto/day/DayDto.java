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
public class DayDto {
    private Long dayId;

    private int dayNumber;

    private Long planId;

    private List<PlaceResponseDto> places;

    public DayDto(Day day){
        this.dayNumber = day.getDayNumber();
        this.dayId = day.getId();
        this.planId = day.getPlan().getId();
        this.places = day.getPlaces().stream()
                .map(d->new PlaceResponseDto(d))
                .collect(Collectors.toList());
    }

    public List<Place> PlaceDtoToPlaceEntity(List<PlaceResponseDto> place){
        return place.stream()
                .map(PlaceResponseDto::toEntity)
                .collect(Collectors.toList());
    }
}
