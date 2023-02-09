package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.user.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FamilyUserDto {

    private String memberName;

    private String memberEmail;

    private String memberId;

    private String memberImg;

    public FamilyUserDto(Member member) {
        this.memberId = member.getMemberId();
        this.memberEmail = member.getMemberEmail();
        this.memberId = member.getMemberEmail();
        this.memberImg = member.getMemberImg();

    }


}
