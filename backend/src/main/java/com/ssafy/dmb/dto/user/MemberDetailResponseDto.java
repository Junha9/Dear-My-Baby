package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.user.Member;
import com.ssafy.dmb.dto.Plan.PlanDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDetailResponseDto {

    private Long memberNo;

    private String memberName;

    private String memberEmail;

    private String memberId;

    private String memberImg;

    private PlanDto.ClosetPlanResponse closetPlan;

    private PlanDto.CurrentPlanResponse currentPlan;

    private List<FamilyDto.familyList> familyIdList;

    public MemberDetailResponseDto(Member member, PlanDto.ClosetPlanResponse closetPlan, PlanDto.CurrentPlanResponse currentPlan, List<FamilyDto.familyList> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.currentPlan = currentPlan;
        this.closetPlan = closetPlan;
        this.familyIdList = familyIdList;
    }

    public MemberDetailResponseDto(Member member, PlanDto.ClosetPlanResponse closetPlan, List<FamilyDto.familyList> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.closetPlan = closetPlan;
        this.currentPlan = null;
        this.familyIdList = familyIdList;
    }

    public MemberDetailResponseDto(Member member, PlanDto.CurrentPlanResponse currentPlan, List<FamilyDto.familyList> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.closetPlan = null;
        this.currentPlan = currentPlan;
        this.familyIdList = familyIdList;
    }

    public MemberDetailResponseDto(Member member, List<FamilyDto.familyList> familyIdList){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.closetPlan = null;
        this.currentPlan = null;
        this.familyIdList = familyIdList;
    }

    public MemberDetailResponseDto(Member member){
        this.memberNo = member.getNo();
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
        this.closetPlan = null;
        this.currentPlan = null;
        this.familyIdList = null;
    }
    @Override
    public String toString() {
        return "MemberDetailResponseDto{" +
                "memberNo=" + memberNo +
                ", memberName='" + memberName + '\'' +
                ", memberEmail='" + memberEmail + '\'' +
                ", memberId='" + memberId + '\'' +
                ", memberImg='" + memberImg + '\'' +
                ", closetPlan=" + closetPlan +
                ", currentPlan=" + currentPlan +
                ", familyIdList=" + familyIdList +
                '}';
    }
}
