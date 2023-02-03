package com.ssafy.dmb.dto.recommend;

import com.ssafy.dmb.domain.location.Region;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class RegionResponseDto {

    private Long regionId;

    private String regionName;

    private String regionImgUrl;

    public RegionResponseDto(Region region) {
        this.regionId = region.getId();
        this.regionName = region.getRegionName();
        this.regionImgUrl = region.getRegionImgUrl();
    }

}
