package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.domain.plan.Day;
import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.Plan.PlanDto;
import com.ssafy.dmb.dto.day.CurrentDayDto;
import com.ssafy.dmb.dto.day.DayDto;
import com.ssafy.dmb.error.BusinessException;
import com.ssafy.dmb.error.ErrorCode;
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

    private final Logger LOGGER = LoggerFactory.getLogger(PlanService.class);
    private final DayRepository dayRepository;
    private final FamilyRepository familyRepository;
    private final PlanRepository planRepository;

    public PlanDto.PlanDetail getPlanDetail(Long planId) {
        Plan plan = planRepository.findById(planId).get();

        PlanDto.PlanDetail planDetail = new PlanDto.PlanDetail(plan);

        return planDetail;
    }

    public CurrentDayDto getCurrentDay(Long planId) {
        Plan plan = planRepository.findById(planId).get();
        int currentDay = plan.getCurrentDay();
        List<Day> days = plan.getDays();

        Long currentDayId = -1L;
        for(Day d: days){
            if(currentDay == d.getDayNumber()){
                currentDayId = d.getId();
                break;
            }
        }

        Day day = null;
        CurrentDayDto currentDayDto = null;
        if(currentDayId != -1L) {
            day = dayRepository.findById(currentDayId).get();
            currentDayDto = new CurrentDayDto(day, currentDay);
        }else{
            currentDayDto = new CurrentDayDto(-1);
        }

        return currentDayDto;
    }

    public Long startPlan(Long planId) {
        Plan changeplan = planRepository.findById(planId).get();
        changeplan.setPlanState(1);
        planRepository.save(changeplan);
        Plan plan = planRepository.findById(planId).get();
        PlanDto.PlanDetail planDetail = new PlanDto.PlanDetail(plan);
        List<DayDto> dayList = planDetail.getDays();
        Long currentDayId = -1L;
        for(DayDto d: dayList){
            if(d.getDayNumber() == 1){
                currentDayId = d.getDayId();
            }
        }

        return currentDayId;
    }

    public PlanDto.PlanDetail endPlan(Long planId) {
        Plan changeplan = planRepository.findById(planId).get();
        changeplan.setPlanState(2);
        planRepository.save(changeplan);
        Plan plan = planRepository.findById(planId).get();
        PlanDto.PlanDetail planDetail = new PlanDto.PlanDetail(plan);

        return planDetail;
    }

    public List<PlanDto.PlanDetail> getPlanDetailList(Long familyId) {
        LOGGER.info("[getPlanDetailList] input familyId: {}", familyId);
        List<Plan> planList = planRepository.findAllByFamily(familyId);

        List<PlanDto.PlanDetail> planDetailList = planList.stream()
                .map(p -> new PlanDto.PlanDetail(p))
                .collect(Collectors.toList());

        return planDetailList;

    }

    public PlanDto.PlanDetail createPlan(PlanDto.PlanRequest request) {
        LOGGER.info("[createPlan] input request: {}", request);
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Plan plan = Plan.builder()
                .planDestination(request.getPlanDestination())
                .planName(request.getPlanName())
                .startDate(request.getStartDate())
                .planLatitude(request.getPlanLatitude())
                .planLongitude(request.getPlanLongitude())
                .endDate(request.getEndDate())
                .family(family)
                .planState(0)
                .currentDay(1)
                .build();

        int period = plan.getPlanPeriod();

        if (period <= 0) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "여행 종료일은 출발일 이후여야 합니다.");
        }

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

    public PlanDto.PlanDetail updatePlan(PlanDto.PlanRequest request, Long planId) {
        LOGGER.info("[updatePlan] input request: {}, {}", request, planId );
        Long familyId = request.getFamilyId();
        Family family = familyRepository.findById(familyId).get();

        Plan plan = Plan.builder()
                .planDestination(request.getPlanDestination())
                .planName(request.getPlanName())
                .planLatitude(request.getPlanLatitude())
                .planLongitude(request.getPlanLongitude())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .family(family)
                .build();

        plan.setId(planId);
        planRepository.save(plan);
        return getPlanDetail(planId);
    }

    public CurrentDayDto moveNextDay(Long planId, int currentDay) {
        Plan plan = planRepository.findById(planId).get();

        plan.setCurrentDay(currentDay);
        planRepository.save(plan);

        return getCurrentDay(planId);
    }

    public void deletePlan(Long planId) {
        LOGGER.info("[deletePlan] input planId : {}", planId);
        planRepository.deleteById(planId);
    }
}
