package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.BabyDto;
import com.ssafy.dmb.repository.BabyRepository;
import com.ssafy.dmb.service.BabyServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/baby")
@RequiredArgsConstructor
public class BabyController {

    private final BabyRepository babyRepository;

    private final BabyServiceImpl babyService;

    @GetMapping("/{babyId}")
    @ResponseBody
    public ResponseEntity<BabyDto.Response> getBabyInfo(@PathVariable("babyId") Long babyId) {
        return ResponseEntity.status(HttpStatus.OK).body(babyService.getBabyInfo(babyId));
    }

    @GetMapping("/family/{familyId}")
    @ResponseBody
    public ResponseEntity<List<BabyDto.Response>> getBabyList(@PathVariable("familyId") Long familyId) {
        return ResponseEntity.status(HttpStatus.OK).body(babyService.getBabyList(familyId));
    }

    @PostMapping("/new")
    @ResponseBody
    public ResponseEntity<BabyDto.Response> createBabyInfo(@RequestBody BabyDto.Request request) {

        return ResponseEntity.status(HttpStatus.OK).body(babyService.createBabyInfo(request));
    }

    @PutMapping("/{babyId}")
    @ResponseBody
    public ResponseEntity<BabyDto.Response> updateBabyInfo(@RequestBody BabyDto.Request request,
                                                           @PathVariable("babyId") Long babyId) {

        return ResponseEntity.status(HttpStatus.OK).body(babyService.updateBabyInfo(request, babyId));
    }
    @DeleteMapping("/{babyId}")
    public void deleteBaby(@PathVariable("babyId") Long babyId) {
        babyService.deleteBaby(babyId);
    }
}
