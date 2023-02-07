package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.Member;
import com.ssafy.dmb.dto.user.MemberDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.repository.MemberRepository;
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
public class MemberService {
    private final Logger LOGGER = LoggerFactory.getLogger(MemberService.class);

    private final MemberRepository memberRepository;


    public MemberResponseDto getMemberDetail(String memberId) {
        Member memberDetail = memberRepository.findByMemberId(memberId);

        MemberResponseDto memberResponseDto = new MemberResponseDto(memberDetail);

        return memberResponseDto;
    }

    public void saveMember(String url, MemberDto memberDto) {
        LOGGER.info("[saveMember] input dto: {}", memberDto);

        Member member = Member.builder().
                memberId(memberDto.getMemberId()).
                memberName(memberDto.getMemberName()).
                memberEmail(memberDto.getMemberEmail()).
                memberImg(url).
                memberPassword(memberDto.getMemberPassword()).
                build();

        Member saveMember = memberRepository.save(member);
        // 뭐가 필요한지 말해라 front
    }

    public MemberResponseDto changeMemberInfo(MemberDto memberDto) {
        Member changeMember = memberRepository.findByMemberId(memberDto.getMemberId());

        if(memberDto.getMemberPassword() != null) {
            changeMember.setMemberId(memberDto.getMemberId());
            changeMember.setMemberImg(memberDto.getMemberImg());
            changeMember.setMemberEmail(memberDto.getMemberEmail());
            changeMember.setMemberName(memberDto.getMemberName());
            changeMember.setMemberPassword(memberDto.getMemberPassword());
        }else{
            changeMember.setMemberId(memberDto.getMemberId());
            changeMember.setMemberImg(memberDto.getMemberImg());
            changeMember.setMemberEmail(memberDto.getMemberEmail());
            changeMember.setMemberName(memberDto.getMemberName());
        }

        memberRepository.save(changeMember);

        return null;
    }

    public void deleteMember(String memberId) {
        memberRepository.deleteByMemberId(memberId);
    }

    public boolean checkMemberId(String memberId) {
        Member member = memberRepository.findByMemberId(memberId);

        if(member == null) return true;
        else return false;
    }

}
