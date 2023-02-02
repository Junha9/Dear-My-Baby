package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.LocationDto;

import java.util.List;

public interface LocationService {
    List<LocationDto.Response> getLocationList(Long regionId);


}
