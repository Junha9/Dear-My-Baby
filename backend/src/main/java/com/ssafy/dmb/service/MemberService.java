package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.plan.Plan;
import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.domain.user.FamilyUser;
import com.ssafy.dmb.domain.user.Member;
import com.ssafy.dmb.dto.Plan.PlanDto;
import com.ssafy.dmb.dto.login.TokenInfo;
import com.ssafy.dmb.dto.user.FamilyDto;
import com.ssafy.dmb.dto.user.MemberDetailResponseDto;
import com.ssafy.dmb.dto.user.MemberDto;
import com.ssafy.dmb.dto.user.MemberResponseDto;
import com.ssafy.dmb.jwt.JwtTokenProvider;
import com.ssafy.dmb.repository.FamilyRepository;
import com.ssafy.dmb.repository.FamilyUserRepository;
import com.ssafy.dmb.repository.MemberRepository;
import com.ssafy.dmb.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final Logger LOGGER = LoggerFactory.getLogger(MemberService.class);

    private final MemberRepository memberRepository;
    private final FamilyUserRepository familyUserRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final PlanRepository planRepository;
    private final FamilyRepository familyRepository;

    public MemberDetailResponseDto getMemberDetail(String memberId) {

        Member memberDetail = memberRepository.findByMemberId(memberId);

        Long memberNo = memberDetail.getNo();

        List<FamilyUser> familyUserList = null;
        familyUserList = familyUserRepository.findByMemberNo(memberNo);

        int dday = -999;
        Long closetPlanId = -1L;
        if(familyUserList!=null) {
            // user가 가입했던 FamilyId들을 돌면서
            // Family 마다의 여행 List들을 조회하고
            // 각각의 Plan List를 돌면서
            // 아직 시작하지 않은 plan들 중에 startDate와 현재 날짜를 비교하며
            // 최솟값을 갱신하고 갱신될때마다 closetPlanId를 갱신한다.
            for (FamilyUser fu : familyUserList) {
                Long familyId = fu.getFamily().getId();
                List<Plan> planList = planRepository.findAllByFamily(familyId);
                for (Plan p : planList) {
                    if (p.getPlanState() == 0 && dday < Period.between(p.getStartDate(), LocalDate.now()).getDays()) {
                        dday = Period.between(p.getStartDate(), LocalDate.now()).getDays();
                        closetPlanId = p.getId();
                    }
                }
            }

            Plan closetPlan = null;

            if (dday != -999) {
                closetPlan = planRepository.findById(closetPlanId).get();
            }

            PlanDto.ClosetPlanResponse closetPlanResponse = null;

            if (closetPlan != null)
                closetPlanResponse = new PlanDto.ClosetPlanResponse(closetPlan);

            //--------------------------
            Plan currentPlan = null;
            G :for (FamilyUser fu : familyUserList) {
                Long familyId = fu.getFamily().getId();
                List<Plan> planList = planRepository.findAllByFamily(familyId);
                for (Plan p : planList) {
                    currentPlan = planRepository.findCurrentPlanByPlanState(p.getId());

                    if(currentPlan != null)
                        break G;
                }
            }

            PlanDto.CurrentPlanResponse currentPlanResponse = null;
            if (currentPlan != null)
                currentPlanResponse = new PlanDto.CurrentPlanResponse(currentPlan);

            List<FamilyDto.familyList> familyIdList = new ArrayList<>();
            for (FamilyUser fu : familyUserList) {
                FamilyDto.familyList familyList = new FamilyDto.familyList(fu.getFamily());
                familyIdList.add(familyList);
            }

            MemberDetailResponseDto memberDetailResponseDto = null;

            if (currentPlan == null && closetPlan == null)
                memberDetailResponseDto = new MemberDetailResponseDto(memberDetail, familyIdList);
            else if (currentPlan == null)
                memberDetailResponseDto = new MemberDetailResponseDto(memberDetail, closetPlanResponse, familyIdList);
            else if (closetPlan == null)
                memberDetailResponseDto = new MemberDetailResponseDto(memberDetail, currentPlanResponse, familyIdList);
            else
                memberDetailResponseDto = new MemberDetailResponseDto(memberDetail, closetPlanResponse, currentPlanResponse, familyIdList);

            return memberDetailResponseDto;
        }
        return new MemberDetailResponseDto(memberDetail);
    }

    public List<FamilyDto.familyList> getFamilyList(Long memberNo) {

        List<Family> families = familyUserRepository.findFamilyIdByMemberNo(memberNo);

        List<FamilyDto.familyList> familyLists = new ArrayList<>();
        for(Family f:families){
            FamilyDto.familyList familyList = new FamilyDto.familyList(f);
            familyLists.add(familyList);
        }

        return familyLists;

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
