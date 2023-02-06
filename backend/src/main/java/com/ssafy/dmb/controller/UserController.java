package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.user.UserDto;
import com.ssafy.dmb.dto.user.UserResponseDto;
import com.ssafy.dmb.service.S3Service;
import com.ssafy.dmb.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@Tag(name = "User", description = "User API 입니다.")
@RequestMapping("/api/user")
public class UserController {

    private final S3Service s3Service;

    private final UserService userService;

    @PostMapping()
    @Operation(summary = "회원가입", description = "<strong> userId, userEmail, userImg, userPassword, userName </strong>을 통해 회원가입한다.")
    public String saveUser(@RequestPart MultipartFile multipartFile
            , @RequestPart UserDto userDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        userService.saveUser(url, userDto);
        return url;
    }

    @PostMapping("/check/{userId}")
    @Operation(summary = "아이디 중복 체크", description = "<strong> userId </strong>를 통해 Id 중복체크한다.")
    public boolean checkUserId(@PathVariable String userId) throws IOException {
        return  userService.checkUserId(userId);
    }

    @GetMapping("/detail/{userId}")
    @Operation(summary = "회원 정보 조회", description = "<strong> userID </strong>를 통해 회원 정보를 조회한다.")
    public ResponseEntity<UserResponseDto> getPlanDetail(@PathVariable ("userId") String userId){
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserDetail(userId));
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "회원 탈퇴", description = "<strong> userID </strong>를 통해 회원 탈퇴한다.")
    public void deleteUser(@PathVariable("userId") String userId) throws IOException {
        userService.deleteUser(userId);
    }

    @PutMapping()
    @Operation(summary = "회원 정보 수정", description = "<strong> userDto</strong>를 통해 회원정보를 수정한다.")
    public void changeUserInfo(@RequestBody UserDto userDto) throws IOException {
        userService.changeUserInfo(userDto);
    }

}
