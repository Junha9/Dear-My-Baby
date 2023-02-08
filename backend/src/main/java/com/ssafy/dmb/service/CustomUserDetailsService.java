package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.Member;
import com.ssafy.dmb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
        System.out.println("ddddd");
        Optional<Member> member = memberRepository.findOptionalById(memberId);

        UserDetails userDetails =  memberRepository.findOptionalById(memberId)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));

        return userDetails;
    }

    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(Member member) {
        UserDetails userDetails = User.builder()
                .username(member.getMemberId())
                .password(passwordEncoder.encode(member.getMemberPassword()))
                .roles(member.getRoles().toArray(new String[0]))
                .build();

        return userDetails;
    }
}