package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.User;
import com.ssafy.dmb.dto.user.UserDto;
import com.ssafy.dmb.dto.user.UserResponseDto;
import com.ssafy.dmb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    public UserResponseDto getUserDetail(String userId) {
        User userDetail = userRepository.findByUserId(userId);

        UserResponseDto userResponseDto = new UserResponseDto(userDetail);

        return userResponseDto;
    }

    public void saveUser(String url, UserDto userDto) {
        LOGGER.info("[saveUser] input dto: {}", userDto);

        User user = User.builder().
                userId(userDto.getUserId()).
                userName(userDto.getUserName()).
                userEmail(userDto.getUserEmail()).
                userImg(url).
                userPassword(userDto.getUserPassword()).
                build();

        User saveUser = userRepository.save(user);
        // 뭐가 필요한지 말해라 front
    }

    public UserResponseDto changeUserInfo(UserDto userDto) {
        User changeUser = userRepository.findByUserId(userDto.getUserId());

        if(userDto.getUserPassword() != null) {
            changeUser.setUserId(userDto.getUserId());
            changeUser.setUserImg(userDto.getUserImg());
            changeUser.setUserEmail(userDto.getUserEmail());
            changeUser.setUserName(userDto.getUserName());
            changeUser.setUserPassword(userDto.getUserPassword());
        }else{
            changeUser.setUserId(userDto.getUserId());
            changeUser.setUserImg(userDto.getUserImg());
            changeUser.setUserEmail(userDto.getUserEmail());
            changeUser.setUserName(userDto.getUserName());
        }

        userRepository.save(changeUser);

        return null;
    }

    public void deleteUser(String userId) {
        userRepository.deleteByUserId(userId);
    }

    public boolean checkUserId(String userId) {
        User user = userRepository.findByUserId(userId);

        if(user == null) return true;
        else return false;
    }
}
