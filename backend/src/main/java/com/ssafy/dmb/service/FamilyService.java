package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.user.*;
import com.ssafy.dmb.dto.user.FamilyDto;
import com.ssafy.dmb.repository.FamilyRepository;
import com.ssafy.dmb.repository.FamilyUserRepository;
import com.ssafy.dmb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FamilyService {

    private final Logger LOGGER = LoggerFactory.getLogger(FamilyService.class);

    private final FamilyRepository familyRepository;
    private final FamilyUserRepository familyUserRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public FamilyDto.familyResponse createFamily(FamilyDto.familyRequest request) {
        LOGGER.info("[createFamily] input request: {}", request);

        String memberId = request.getMemberId();
        Member member = memberRepository.findByMemberId(memberId);
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

        Family family = familyRepository.findByInvitation(invitationCode).get();
        LOGGER.info("[joinFamily] family: {}", family);

        Member member = memberRepository.findByMemberId(memberId);
        LOGGER.info("[joinFamily] user: {}", member);

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

    public FamilyDto.familyResponse getFamilyDetail(Long familyId) {
        Family family = familyRepository.findById(familyId).get();
        LOGGER.info("[getFamilyDetail] family: {}", family.getFamilyUser());
        FamilyDto.familyResponse result = new FamilyDto.familyResponse(family);
        LOGGER.info("[getFamilyDetail] result: {}", result);
        return result;
    }
}
