package com.ssafy.dmb.service;


import com.ssafy.dmb.domain.plan.Checklist;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.Plan.ChecklistResponseDto;
import com.ssafy.dmb.dto.Plan.ChecklistDto;
import com.ssafy.dmb.repository.ChecklistRepository;
import com.ssafy.dmb.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional
@Slf4j
@Service
public class ChecklistService {
    private final ChecklistRepository checklistRepository;
    private final PlanRepository planRepository;

    public ChecklistResponseDto saveChecklist(ChecklistDto checklistDto) {
        Long planId = checklistDto.getPlanId();

        Plan plan = planRepository.findById(planId).
                orElseThrow(() -> new NoSuchElementException());

        Checklist checklist = Checklist.builder()
                .plan(plan)
                .item(checklistDto.getItem())
                .build();
        checklistRepository.save(checklist);
        return null;
    }

    public List<ChecklistResponseDto> getChecklist(Long planId) {
        List<Checklist> checklistList = checklistRepository.findAllByPlanId(planId);
        List<ChecklistResponseDto> ItemList = checklistList.stream()
                .map(t -> new ChecklistResponseDto(t))
                .collect(Collectors.toList());

        return ItemList;

    }

    public void deleteItem(Long checkListId) {
        checklistRepository.deleteById(checkListId);
    }


}
