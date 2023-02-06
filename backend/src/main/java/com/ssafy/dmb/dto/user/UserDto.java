package com.ssafy.dmb.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private String userName;

    private String userEmail;

    private String userPassword;

    private String userId;

    private String userImg;
}
