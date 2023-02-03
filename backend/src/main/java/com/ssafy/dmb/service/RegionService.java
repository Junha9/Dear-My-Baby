package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.location.Region;
import com.ssafy.dmb.dto.recommend.RegionResponseDto;
import com.ssafy.dmb.repository.RegionRepository;
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
public class RegionService {
    private final RegionRepository regionRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(RegionService.class);

    public List<RegionResponseDto> getRegionList() {
        List<Region> regionList = regionRepository.findNameAndImg();

        List<RegionResponseDto> regions = regionList.stream()
                .map(l -> new RegionResponseDto(l))
                .collect(Collectors.toList());

        return regions;
    }

}
