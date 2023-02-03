package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.day.DayDto;
import com.ssafy.dmb.dto.day.PlaceResponseDto;
import com.ssafy.dmb.service.DayService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/day")
public class DayController {
    private final DayService dayService;

    @PostMapping()
    public String saveDay(@RequestBody DayDto dayDto) throws IOException {

        dayService.saveDay(dayDto);
        return "ok";
    }

    @GetMapping("/place")
    public List<PlaceResponseDto> getDayPlaceList(@RequestParam("dayId") Long dayId) throws IOException {
        return dayService.getDayPlaceList(dayId);
    }

}
