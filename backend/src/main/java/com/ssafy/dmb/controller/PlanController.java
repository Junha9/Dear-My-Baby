package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.Plan.PlanDto;
import com.ssafy.dmb.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/plan")
public class PlanController {

    private final PlanService planService;

    @GetMapping("/detail/{planId}")
    public ResponseEntity<PlanDto.Detail> getPlanDetail(@PathVariable ("planId") Long planId){
        return ResponseEntity.status(HttpStatus.OK).body(planService.getPlanDetail(planId));
    }

    @GetMapping("/{familyId}")
    public ResponseEntity<List<PlanDto.Detail>> getPlanDetailList(@PathVariable("familyId") Long familyId){
        return ResponseEntity.status(HttpStatus.OK).body(planService.getPlanDetailList(familyId));
    }

    @PostMapping("/new")
    public ResponseEntity<PlanDto.Detail> createPlan(@RequestBody PlanDto.Request request) {
        return ResponseEntity.status(HttpStatus.OK).body(planService.createPlan(request));
    }

    @PutMapping("/update/{planId}")
    public ResponseEntity<PlanDto.Detail> updatePlan(@PathVariable("planId") Long planId, @RequestBody PlanDto.Request request) {
        return ResponseEntity.status(HttpStatus.OK).body(planService.updatePlan(request, planId));
    }

    @DeleteMapping("{planId}")
    public void deletePlan(@PathVariable("planId") Long planId) {
        planService.deletePlan(planId);
    }
}
