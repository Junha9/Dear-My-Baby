package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.user.Member;
import com.ssafy.dmb.dto.Plan.PlanDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberDetailResponseDto {

    private Long memberNo;

    private String memberName;

    private String memberEmail;

    private String memberId;

    private String memberImg;

    private PlanDto.PlanResponse closetPlan;

    private PlanDto.PlanResponse currentPlan;

    private List<Long> familyIdList;

    public MemberDetailResponseDto(Member member, PlanDto.PlanResponse closetPlan, PlanDto.PlanResponse currentPlan,List<Long> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.currentPlan = currentPlan;
        this.closetPlan = closetPlan;
        this.familyIdList = familyIdList;
    }

}
