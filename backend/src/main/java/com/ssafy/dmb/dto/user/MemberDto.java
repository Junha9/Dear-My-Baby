package com.ssafy.dmb.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberDto {

    private String memberName;

    private String memberEmail;

    private String memberPassword;

    private String memberId;

    private String memberImg;
}
