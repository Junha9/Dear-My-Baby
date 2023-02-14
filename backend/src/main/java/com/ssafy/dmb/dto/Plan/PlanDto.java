package com.ssafy.dmb.dto.Plan;

import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.day.DayDto;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PlanDto {
    private Long planId;

    @Getter
    @Builder
    @AllArgsConstructor
    public static class PlanDetail {

        private Long planId;

        private String planName;

        private String planDestination;

        private LocalDate startDate;

        private LocalDate endDate;

        private String planLatitude;

        private String planLongitude;

        private int planPeriod;

        private int planState;

        private Long familyId;

        private int currentDay;

        private List<DayDto> days;

        public PlanDetail(Plan plan) {
            this.planId = plan.getId();
            this.planName = plan.getPlanName();
            this.currentDay = plan.getCurrentDay();
            this.planDestination = plan.getPlanDestination();
            this.planState = plan.getPlanState();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.planPeriod = plan.getPlanPeriod();
            this.familyId = plan.getFamily().getId();
            this.planLatitude = plan.getPlanLatitude();
            this.planLongitude = plan.getPlanLongitude();
            this.days = plan.getDays().stream()
                    .map(d -> new DayDto(d))
                    .collect(Collectors.toList());
        }


    }
    @Getter
    @Builder
    @AllArgsConstructor
    public static class PlanRequest {
        private Long familyId;
        private String planName;
        private String planLatitude;
        private String planLongitude;
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;

    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class ClosetPlanResponse {
        private Long familyId;
        private Long planId;
        private String planName;
        private String planLatitude;
        private String planLongitude;
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;
        private int planState;
        private int planPeriod;

        public ClosetPlanResponse (Plan plan){
            this.familyId=plan.getFamily().getId();
            this.planId = plan.getId();
            this.planName = plan.getPlanName();
            this.planDestination =plan.getPlanDestination();
            this.planLatitude = plan.getPlanLatitude();
            this.planLongitude = plan.getPlanLongitude();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.planState = plan.getPlanState();
            this.planPeriod = plan.getPlanPeriod();
        }

        @Override
        public String toString() {
            return "ClosetPlanResponse{" +
                    "familyId=" + familyId +
                    ", planId=" + planId +
                    ", planName='" + planName + '\'' +
                    ", planDestination='" + planDestination + '\'' +
                    ", startDate=" + startDate +
                    ", endDate=" + endDate +
                    ", planState=" + planState +
                    ", planPeriod=" + planPeriod +
                    '}';
        }
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class CurrentPlanResponse {
        private Long familyId;
        private Long planId;
        private String planName;
        private String planLatitude;
        private String planLongitude;
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;
        private int planState;
        private int planPeriod;

        public CurrentPlanResponse (Plan plan){
            this.familyId=plan.getFamily().getId();
            this.planId = plan.getId();
            this.planName = plan.getPlanName();
            this.planLatitude = plan.getPlanLatitude();
            this.planLongitude = plan.getPlanLongitude();
            this.planDestination =plan.getPlanDestination();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.planState = plan.getPlanState();
            this.planPeriod = plan.getPlanPeriod();
        }

        @Override
        public String toString() {
            return "CurrentPlanResponse{" +
                    "familyId=" + familyId +
                    ", planId=" + planId +
                    ", planName='" + planName + '\'' +
                    ", planDestination='" + planDestination + '\'' +
                    ", startDate=" + startDate +
                    ", endDate=" + endDate +
                    ", planState=" + planState +
                    ", planPeriod=" + planPeriod +
                    '}';
        }
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class PlanRecordResponse {
        private Long planId;
        private String planName;
        private LocalDate startDate;
        private LocalDate endDate;
        private String regionImgUrl;
        public PlanRecordResponse (Plan plan, String regionImgUrl){
            this.planId = plan.getId();
            this.planName = plan.getPlanName();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.regionImgUrl = regionImgUrl;
        }

    }
}
