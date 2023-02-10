package com.ssafy.dmb.dto.Plan;

import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.dto.day.DayDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.validation.constraints.NotEmpty;
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
    public static class Detail {

        private Long planId;

        @NotEmpty
        private String planName;
        @NotEmpty
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;
        private int planPeriod;
        private Long familyId;

        private List<DayDto> days;

        public Detail(Plan plan) {
            this.planId = plan.getId();
            this.planName = plan.getPlanName();
            this.planDestination = plan.getPlanDestination();
            this.startDate = plan.getStartDate();
            this.endDate = plan.getEndDate();
            this.planPeriod = plan.getPlanPeriod();
            this.familyId = plan.getFamily().getId();
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
        @Schema(description = "이름")
        @NotEmpty
        private String planName;
        @NotEmpty
        private String planDestination;
        private LocalDate startDate;
        private LocalDate endDate;

    }
}
