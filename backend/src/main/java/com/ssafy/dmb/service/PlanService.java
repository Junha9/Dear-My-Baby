package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.domain.plan.Day;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.Plan.PlanDto;
import com.ssafy.dmb.repository.DayRepository;
import com.ssafy.dmb.repository.FamilyRepository;
import com.ssafy.dmb.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PlanService {
    private final DayRepository dayRepository;
    private final FamilyRepository familyRepository;

    private final Logger LOGGER = LoggerFactory.getLogger(PlanService.class);

    private final PlanRepository planRepository;

    public PlanDto.Detail getPlanDetail(Long planId) {
        Plan plan = planRepository.findById(planId).get();

        PlanDto.Detail planDetail = new PlanDto.Detail(plan);


        return planDetail;
    }

    public List<PlanDto.Detail> getPlanDetailList(Long familyId) {
        LOGGER.info("[getPlanDetailList] input familyId: {}", familyId);
        List<Plan> planList = planRepository.findAllByFamily(familyId);

        List<PlanDto.Detail> planDetailList = planList.stream()
                .map(p -> new PlanDto.Detail(p))
                .collect(Collectors.toList());

        return planDetailList;

    }

    public PlanDto.Detail createPlan(PlanDto.PlanRequest request) {
        LOGGER.info("[createPlan] input request: {}", request);
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Plan plan = Plan.builder()
                .planDestination(request.getPlanDestination())
                .planName(request.getPlanName())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .family(family)
                .build();

        int period = plan.getPlanPeriod();
        // day를 만들어서 저장해야되는데
        // plan랑 daynumber => period로 가 필요
        for(int i = 1;i<=period;i++){
            Day day = Day.builder()
                .dayNumber(i)
                        .plan(plan)
                                .build();
            dayRepository.save(day);
        }
        Long planId = planRepository.save(plan).getId();
        return getPlanDetail(planId);

    }

    public PlanDto.Detail updatePlan(PlanDto.PlanRequest request, Long planId) {
        LOGGER.info("[updatePlan] input request: {}, {}", request, planId );
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Plan plan = Plan.builder()
                .planDestination(request.getPlanDestination())
                .planName(request.getPlanName())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .family(family)
                .build();

        plan.setId(planId);
        planRepository.save(plan);
        return getPlanDetail(planId);
    }

    public void deletePlan(Long planId) {
        LOGGER.info("[deletePlan] input planId : {}", planId);
        planRepository.deleteById(planId);
    }
}
