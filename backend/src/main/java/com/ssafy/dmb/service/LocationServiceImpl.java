package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.location.Location;
import com.ssafy.dmb.dto.LocationDto;
import com.ssafy.dmb.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements LocationService{
    private final LocationRepository locationRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(LocationServiceImpl.class);

    @Override
    public List<LocationDto.Response> getLocationList(Long regionId) {
        LOGGER.info("[getLocationList] input regionId: {}", regionId);
        List<Location> locationList = locationRepository.findAllByRegion(regionId);

        List<LocationDto.Response> locationDtoList = locationList.stream()
                .map(l -> new LocationDto.Response(l))
                .collect(Collectors.toList());

        return locationDtoList;
    }
}
