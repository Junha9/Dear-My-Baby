package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Tour;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class TourResponseDto {
    private Long tourId;

    private String tourName;

    private String tourImgUrl;

    public TourResponseDto(Tour tour) {
        this.tourId = tour.getId();
        this.tourName = tour.getTourName();
        this.tourImgUrl = tour.getTourImgUrl();
    }

}
