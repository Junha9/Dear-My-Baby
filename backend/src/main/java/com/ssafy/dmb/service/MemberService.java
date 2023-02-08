package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.Member;
import com.ssafy.dmb.dto.jwt.JwtTokenProvider;
import com.ssafy.dmb.dto.login.TokenInfo;
import com.ssafy.dmb.dto.user.MemberDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final Logger LOGGER = LoggerFactory.getLogger(MemberService.class);

    private final MemberRepository memberRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

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
                joinDate(LocalDateTime.now()).
                build();

        List<String> list = new ArrayList<>();
        list.add("User");
        member.setRoles(list);

        Member saveMember = memberRepository.save(member);
        // 뭐가 필요한지 말해라 front
    }

    public MemberResponseDto changeMemberInfo(MemberDto memberDto) {
        Member changeMember = memberRepository.findByMemberId(memberDto.getMemberId());

        if (memberDto.getMemberPassword() != null) {
            changeMember.setMemberId(memberDto.getMemberId());
            changeMember.setMemberImg(memberDto.getMemberImg());
            changeMember.setMemberEmail(memberDto.getMemberEmail());
            changeMember.setMemberName(memberDto.getMemberName());
            changeMember.setMemberPassword(memberDto.getMemberPassword());
        } else {
            changeMember.setMemberId(memberDto.getMemberId());
            changeMember.setMemberImg(memberDto.getMemberImg());
            changeMember.setMemberEmail(memberDto.getMemberEmail());
            changeMember.setMemberName(memberDto.getMemberName());
        }

        memberRepository.save(changeMember);

        return null;
    }

    public void changeMemberRefreshToken(String memberId, String refreshToken) {
        Member changeRefreshToken = memberRepository.findByMemberId(memberId);
        changeRefreshToken.setRefreshToken(refreshToken);
        memberRepository.save(changeRefreshToken);
    }

    public void deleteMember(String memberId) {
        memberRepository.deleteByMemberId(memberId);
    }

    public boolean checkMemberId(String memberId) {
        Member member = memberRepository.findByMemberId(memberId);

        if (member == null) return true;
        else return false;
    }

    @Transactional
    public TokenInfo login(String memberId, String password) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberId, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        return tokenInfo;
    }

    @Transactional
    public String getMemberToken(String refreshToken) {
        Member member = memberRepository.findByRefreshToken(refreshToken);

        if (member != null) {
            String memberId = member.getMemberId();
            String memberPassword = member.getMemberPassword();
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberId, memberPassword);
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
            String accessToken = jwtTokenProvider.generateAccessToken(authentication);

            return accessToken;
        }

        return null;
    }
    public void deleteMemberToken(String memberId) {
        Member tokenDeleteMember = memberRepository.findByMemberId(memberId);
        tokenDeleteMember.setRefreshToken(null);
        memberRepository.save(tokenDeleteMember);
    }

}
