package com.ssafy.dmb.dto.user;

import com.ssafy.dmb.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserResponseDto {

    private String userName;

    private String userEmail;

    private String userId;

    private String userImg;
    public UserResponseDto(User user){
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.userEmail = user.getUserEmail();
        this.userImg = user.getUserImg();
    }
}
