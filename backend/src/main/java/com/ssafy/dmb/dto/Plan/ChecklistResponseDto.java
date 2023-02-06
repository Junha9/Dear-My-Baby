package com.ssafy.dmb.dto.Plan;

import com.ssafy.dmb.domain.plan.Checklist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChecklistResponseDto {
    private Long checklistId;

    private Long planId;

    private String item;

    public ChecklistResponseDto(Checklist checklist) {
        checklistId = checklist.getId();
        planId = checklist.getPlan().getId();
        item = checklist.getItem();
    }
}
