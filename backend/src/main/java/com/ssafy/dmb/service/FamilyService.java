package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.user.*;
import com.ssafy.dmb.dto.user.FamilyDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.error.BusinessException;
import com.ssafy.dmb.error.ErrorCode;
import com.ssafy.dmb.repository.FamilyRepository;
import com.ssafy.dmb.repository.FamilyUserRepository;
import com.ssafy.dmb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FamilyService {

    private final Logger LOGGER = LoggerFactory.getLogger(FamilyService.class);

    private final FamilyRepository familyRepository;
    private final FamilyUserRepository familyUserRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public FamilyDto.familyResponse createFamily(FamilyDto.FamilyRequest request) {
        LOGGER.info("[createFamily] input request: {}", request);

        String memberId = request.getMemberId();
        Member member = memberRepository.findByMemberId(memberId);

        //member 유효성 검사
        if ((member == null)) {
            System.out.println("예외!예외!");
            throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE, "유효하지 않은 회원입니다.");
        }

        String invitation = InvitationCode.create();

        // 중복이 아닐때까지 생성
        while ( !familyRepository.findAllByInvitation(invitation).isEmpty() ) {
            invitation = InvitationCode.create();
        }

        Family familyRep = Family.builder()
                .familyName(request.getFamilyName())
                .invitation(invitation)
                .build();
        Family family = familyRepository.save(familyRep);


        FamilyUser familyUser = FamilyUser.builder()
                .family(family)
                .member(member)
                .role(Role.FAMILYLEADER)
                .build();

        familyUserRepository.save(familyUser);
        FamilyDto.familyResponse result = new FamilyDto.familyResponse(family);
        return result;

    }

    public String getInvitationCode(Long familyId) {
        Family family = familyRepository.findById(familyId).get();
        String code = family.getInvitation();
        return code;
    }

    @Transactional
    public FamilyDto.familyResponse joinFamily(String invitationCode, String memberId) {
        LOGGER.info("[joinFamily] invitationCode: {}", invitationCode);

        Family family = familyRepository.findByInvitation(invitationCode);
        LOGGER.info("[joinFamily] family: {}", family);

        if (family == null) {
            throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE, "유효하지 않은 초대장입니다.");
        }

        Member member = memberRepository.findByMemberId(memberId);
        LOGGER.info("[joinFamily] user: {}", member);

        if (!(familyUserRepository.findByMemberAndFamily(member, family) == null)) {
            throw new BusinessException(ErrorCode.INVALID_INPUT_VALUE, "이미 그룹에 속한 회원입니다.");
        }



        FamilyUser familyUser = FamilyUser.builder()
                .family(family)
                .member(member)
                .role(Role.FAMILYMEMBER)
                .build();

        LOGGER.info("[joinFamily] familyUser: {}", familyUser);
        FamilyUser saved = familyUserRepository.save(familyUser);
        LOGGER.info("[joinFamily] saved: {}", saved);
        FamilyDto.familyResponse result = new FamilyDto.familyResponse(family);
        LOGGER.info("[joinFamily] completed");
        return result;
    }

    //familyUser 에서 Member 정보 반환하는 함수 선언
    public MemberResponseDto familyUserToMemberResponseDto(FamilyUser familyUser) {
        Member member = familyUser.getMember();
        MemberResponseDto result = new MemberResponseDto(member);
        return result;
    }

    public FamilyDto.FamilyUserList getFamilyDetail(Long familyId) {
        Family family = familyRepository.findById(familyId).get();



        LOGGER.info("[getFamilyDetail] family: {}", family.getFamilyUser());

        List<FamilyUser> familyUserList = family.getFamilyUser();

        LOGGER.info("[getFamilyDetail] familyUserList: {}", familyUserList);

        List<MemberResponseDto> familyMemberList = familyUserList.stream()
                .map(u -> familyUserToMemberResponseDto(u))
                .collect(Collectors.toList());

        LOGGER.info("[getFamilyDetail] familyMemberList: {}", familyMemberList);

        FamilyDto.FamilyUserList result = new FamilyDto.FamilyUserList(family, familyMemberList);

        LOGGER.info("[getFamilyDetail] result: {}", result);
        return result;

//        FamilyDto.Response result = new FamilyDto.Response(family);
//        LOGGER.info("[getFamilyDetail] result: {}", result);
//        return result;
    }
}
