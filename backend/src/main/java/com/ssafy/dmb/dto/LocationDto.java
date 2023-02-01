package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.location.Location;
import com.ssafy.dmb.domain.location.LocationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public class LocationDto {
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private String locationName;

        @Enumerated(EnumType.STRING)
        private LocationType locationType;

        private String locationAddress;

        private String locationLatitude;

        private String locationLongitude;

        public Response(Location location) {
            this.locationName = location.getLocationName();
            this.locationType = location.getLocationType();
            this.locationAddress = location.getLocationAddress();
            this.locationLatitude = location.getLocationLatitude();
            this.locationLongitude = location.getLocationLongitude();
        }
    }
}
