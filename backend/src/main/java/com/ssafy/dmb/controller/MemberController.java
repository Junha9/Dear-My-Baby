package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.user.MemberDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.service.S3Service;
import com.ssafy.dmb.service.MemberService;
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
@Tag(name = "Member", description = "Member API 입니다.")
@RequestMapping("/api/member")
public class MemberController {

    private final S3Service s3Service;

    private final MemberService memberService;

    @PostMapping()
    @Operation(summary = "회원가입", description = "<strong> Id, Email, Img, Password, Name </strong>을 통해 회원가입한다.")
    public String saveMember(@RequestPart MultipartFile multipartFile
            , @RequestPart MemberDto memberDto) throws IOException {

        String url = s3Service.upload(multipartFile, "dearmybucket", "dmb");

        memberService.saveMember(url, memberDto);
        return url;
    }

    @PostMapping("/check/{memberId}")
    @Operation(summary = "아이디 중복 체크", description = "<strong> memberId </strong>를 통해 Id 중복체크한다.")
    public boolean checkUserId(@PathVariable String memberId) throws IOException {
        return  memberService.checkMemberId(memberId);
    }

    @GetMapping("/detail/{memberId}")
    @Operation(summary = "회원 정보 조회", description = "<strong> memberID </strong>를 통해 회원 정보를 조회한다.")
    public ResponseEntity<MemberResponseDto> getPlanDetail(@PathVariable ("memberId") String memberId){
        return ResponseEntity.status(HttpStatus.OK).body(memberService.getMemberDetail(memberId));
    }

    @DeleteMapping("/{memberId}")
    @Operation(summary = "회원 탈퇴", description = "<strong> memberID </strong>를 통해 회원 탈퇴한다.")
    public void deleteUser(@PathVariable("memberId") String memberId) throws IOException {
        memberService.deleteMember(memberId);
    }

    @PutMapping()
    @Operation(summary = "회원 정보 수정", description = "<strong> memberDto</strong>를 통해 회원정보를 수정한다.")
    public void changeUserInfo(@RequestBody MemberDto memberDto) throws IOException {
        memberService.changeMemberInfo(memberDto);
    }

}
