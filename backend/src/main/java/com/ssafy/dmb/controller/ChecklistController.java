package com.ssafy.dmb.controller;


import com.ssafy.dmb.domain.plan.Checklist;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.Plan.ChecklistDto;
import com.ssafy.dmb.dto.Plan.ChecklistResponseDto;
import com.ssafy.dmb.repository.ChecklistRepository;
import com.ssafy.dmb.service.ChecklistService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Tag(name = "Checklist", description = "Checklist API 입니다.")
@RequestMapping("/checklist")
public class ChecklistController {
    private final ChecklistService checklistService;
    private final ChecklistRepository checklistRepository;

    @Operation(summary = "체크 리스트 저장", description = "체크리스트를 저장 한다.")
    @Transactional
    @PostMapping()
    public List<ChecklistResponseDto> saveChecklist(@RequestBody ChecklistDto checklistDto) throws IOException {
        checklistService.saveChecklist(checklistDto);
        return checklistService.getChecklist(checklistDto.getPlanId());
    }

    @Operation(summary = "체크리스트 삭제", description = "<strong> itemId </strong>를 통해 준비물을 삭제 한다.")
    @DeleteMapping("/{cheakListId}")
    public List<ChecklistResponseDto> deleteItem(@PathVariable Long cheakListId) throws IOException {
        Checklist checklist = checklistRepository.findById(cheakListId).get();
        Plan plan = checklist.getPlan();
        checklistService.deleteItem(cheakListId);

        return checklistService.getChecklist(plan.getId());
    }

    @Operation(summary = "체크리스트 조회", description = "<strong> planId </strong>를 통해 계획별 준비물을 조회한다.")
    @GetMapping("/items/{planId}")
    public List<ChecklistResponseDto> getChecklist(@PathVariable Long planId) throws IOException {
        return checklistService.getChecklist(planId);
    }


}
