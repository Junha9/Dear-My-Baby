package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.user.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberResponseDto {

    private String memberName;

    private String memberEmail;

    private String memberId;

    private String memberImg;
    public MemberResponseDto(Member member){
        this.memberId = member.getMemberId();
        this.memberName = member.getMemberName();
        this.memberEmail = member.getMemberEmail();
        this.memberImg = member.getMemberImg();
    }
}
