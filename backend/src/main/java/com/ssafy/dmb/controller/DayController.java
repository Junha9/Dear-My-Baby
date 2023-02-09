package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.day.DayDto;
import com.ssafy.dmb.dto.day.PlaceResponseDto;
import com.ssafy.dmb.service.DayService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Transactional
@RestController
@Tag(name = "Day", description = "day API 입니다.")
@RequestMapping("/api/day")
public class DayController {

    private final DayService dayService;

    @Operation(summary  = "여행일수 저장", description = "여행 일수를 저장한다.")
    @PostMapping()
    public List<PlaceResponseDto> saveDay(@RequestBody DayDto dayDto) throws IOException {

        dayService.saveDay(dayDto);

        return dayService.getDayPlaceList(dayDto.getDayId());

    }
    @Operation(summary = "데이별 장소리스트 조회", description = "<strong> dayId </strong>를 통해 장소 리스트를 조회한다.")
    @GetMapping("/place")
    public List<PlaceResponseDto> getDayPlaceList(@RequestParam("dayId") Long dayId) throws IOException {

        return dayService.getDayPlaceList(dayId);

    }

}
