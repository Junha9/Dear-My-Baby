package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.LocationDto;
import com.ssafy.dmb.repository.LocationRepository;
import com.ssafy.dmb.service.LocationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@RequiredArgsConstructor
public class LocationController {

    private final LocationRepository locationRepository;

    private final LocationServiceImpl locationService;

    @GetMapping("/{regionId}")
    @ResponseBody
    public ResponseEntity<List<LocationDto.Response>> getLocationList(@PathVariable("regionId") Long regionId) {
        return ResponseEntity.status(HttpStatus.OK).body(locationService.getLocationList(regionId));
    }





}
