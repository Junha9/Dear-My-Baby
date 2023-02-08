package com.ssafy.dmb.dto.Plan;

import com.ssafy.dmb.domain.plan.Plan;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PlanDto {
    private Long planId;

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Detail {

        private String planName;
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;
        private int planPeriod;
        private Long familyId;

        public Detail(Plan plan) {
            this.planName = plan.getPlanName();
            this.planDestination = plan.getPlanDestination();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.planPeriod = plan.getPlanPeriod();
            this.familyId = plan.getFamily().getId();
        }


    }
    @Getter
    @Builder
    @AllArgsConstructor
    public static class PlanRequest {
        private Long familyId;
        @Schema(description = "이름")
        private String planName;
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;

    }
}
