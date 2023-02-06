package com.ssafy.dmb.dto.Plan;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChecklistDto {
    private Long planId;

    private String item;
}
