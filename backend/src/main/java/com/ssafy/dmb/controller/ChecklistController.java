package com.ssafy.dmb.controller;


import com.ssafy.dmb.dto.Plan.ChecklistDto;
import com.ssafy.dmb.dto.Plan.ChecklistResponseDto;
import com.ssafy.dmb.service.ChecklistService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Tag(name = "Checklist", description = "Checklist API 입니다.")
@RequestMapping("/checklist")
public class ChecklistController {
    private final ChecklistService checklistService;

    @Operation(summary = "체크 리스트 저장", description = "체크리스트를 저장 한다.")
    @PostMapping()
    public String saveChecklist(@RequestBody ChecklistDto checklistDto) throws IOException {
        checklistService.saveChecklist(checklistDto);
        return "ok";
    }

    @Operation(summary = "체크리스트 삭제", description = "<strong> itemId </strong>를 통해 준비물을 삭제 한다.")
    @DeleteMapping()
    public void deleteItem(@RequestParam("itemId") Long itemId) throws IOException {
        checklistService.deleteItem(itemId);
    }

    @Operation(summary = "체크리스트 조회", description = "<strong> planId </strong>를 통해 계획별 준비물을 조회한다.")
    @GetMapping("/items")
    public List<ChecklistResponseDto> getChecklist(@RequestParam("planId") Long planId) throws IOException {
        return checklistService.getChecklist(planId);
    }


}
