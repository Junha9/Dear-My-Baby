package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.Plan.PlanDto;
import com.ssafy.dmb.service.PlanService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Tag(name = "Plan", description = "plan API 입니다.")
@RequestMapping("/api/plan")
public class PlanController {

    private final PlanService planService;

    @Operation(summary = "여행 계획 단일 조회", description = "<strong> planId </strong>를 통해 여행 계획을 단일 조회한다.")
    @GetMapping("/detail/{planId}")
    public ResponseEntity<PlanDto.Detail> getPlanDetail(@PathVariable ("planId") Long planId){

        return ResponseEntity.status(HttpStatus.OK).body(planService.getPlanDetail(planId));

    }

    @Operation(summary = "여행 계획 리스트 조회", description = "<strong> familyId </strong>를 통해 가족별 여행 계획 리스트를 조회한다.")
    @GetMapping("/{familyId}")
    public ResponseEntity<List<PlanDto.Detail>> getPlanDetailList(@PathVariable("familyId") Long familyId){
        return ResponseEntity.status(HttpStatus.OK).body(planService.getPlanDetailList(familyId));
    }

    @Operation(summary = "여행 계획 생성", description = "여행 계획을 생성한다.")
    @PostMapping("/new")
    public ResponseEntity<PlanDto.Detail> createPlan(@RequestBody PlanDto.PlanRequest request) {

        return ResponseEntity.status(HttpStatus.OK).body(planService.createPlan(request));

    }

    @Operation(summary = "여행 계획 수정", description = "<strong> planId </strong>를 통해 여행 계획을 수정한다.")
    @PutMapping("/update/{planId}")
    public ResponseEntity<PlanDto.Detail> updatePlan(@PathVariable("planId") Long planId
            , @RequestBody PlanDto.PlanRequest request) {

        return ResponseEntity.status(HttpStatus.OK).body(planService.updatePlan(request, planId));

    }

    @Operation(summary = "여행 계획 삭제", description = "<strong> planId </strong>를 통해 여행 계획을 삭제한다.")
    @DeleteMapping("{planId}")
    public void deletePlan(@PathVariable("planId") Long planId) {

        planService.deletePlan(planId);

    }

}
