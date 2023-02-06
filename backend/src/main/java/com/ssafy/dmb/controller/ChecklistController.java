package com.ssafy.dmb.controller;


import com.ssafy.dmb.dto.Plan.ChecklistDto;
import com.ssafy.dmb.dto.Plan.ChecklistResponseDto;
import com.ssafy.dmb.service.ChecklistService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/checklist")
public class ChecklistController {
    private final ChecklistService checklistService;

    @PostMapping()
    public String saveChecklist(@RequestBody ChecklistDto checklistDto) throws IOException {
        checklistService.saveChecklist(checklistDto);
        return "ok";
    }

    @DeleteMapping()
    public void deleteItem(@RequestParam("itemId") Long itemId) throws IOException {
        checklistService.deleteItem(itemId);
    }

    @GetMapping("/items")
    public List<ChecklistResponseDto> getChecklist(@RequestParam("planId") Long planId) throws IOException {
        return checklistService.getChecklist(planId);
    }


}
