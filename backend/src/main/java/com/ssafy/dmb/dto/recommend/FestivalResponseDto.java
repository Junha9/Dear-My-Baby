package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Festival;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class FestivalResponseDto {

    private Long festivalId;

    private String festivalName;

    private String festivalImgUrl;

    public FestivalResponseDto(Festival festival) {
        this.festivalId = festival.getId();
        this.festivalName = festival.getFestivalName();
        this.festivalImgUrl = festival.getFestivalImgUrl();
    }

}
