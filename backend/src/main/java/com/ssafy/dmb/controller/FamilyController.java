package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.user.FamilyDto;
import com.ssafy.dmb.repository.FamilyRepository;
import com.ssafy.dmb.service.FamilyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/family")
@RequiredArgsConstructor
@Tag(name = "Family", description = "Family API 입니다.")
public class FamilyController {

    private final FamilyService familyService;
    private final FamilyRepository familyRepository;

    @PostMapping("/new")
    @Operation(summary = "가족그룹 생성"
            , description = "<strong> FamilyRequest </strong>를 통해 가족그룹을 생성한다.")
    public ResponseEntity<FamilyDto.familyResponse> createFamily(@RequestBody FamilyDto.FamilyRequest request) {

        return ResponseEntity.status(HttpStatus.OK).body(familyService.createFamily(request));

    }

    @GetMapping("/invitation/{familyId}")
    @Operation(summary = "초대코드 조회"
            , description = "<strong> familyId </strong>를 통해 초대코드를 조회한다.")
    public ResponseEntity<String> getInvitationCode(@PathVariable("familyId") Long familyId) {

        return ResponseEntity.status(HttpStatus.OK).body(familyService.getInvitationCode(familyId));

    }

    @PostMapping("/join")
    @Operation(summary = "초대코드랑 memberId로 가입"
            , description = "<strong> memberId, invitationCode </strong>를 통해 가입한다.")
    public ResponseEntity<FamilyDto.familyResponse> joinFamily(@RequestParam("invitationCode") String invitationCode
            , @RequestParam("memberId") String memberId) {

        return ResponseEntity.status(HttpStatus.OK).body(familyService.joinFamily(invitationCode, memberId));

    }

    @GetMapping("/detail/{familyId}")
    @Operation(summary = "family정보조회에 memberlist까지"
            , description = "<strong> familyId </strong>를 통해 family정보조회에 memberlist까지 조회한다.")
    public ResponseEntity<FamilyDto.FamilyUserList> getFamilyDetail(@PathVariable("familyId") Long familyId) {

        return ResponseEntity.status(HttpStatus.OK).body(familyService.getFamilyDetail(familyId));

    }

}
