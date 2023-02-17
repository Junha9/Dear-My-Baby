package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.user.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query("select u from Member u where u.memberId = :memberId")
    Member findByMemberId(@Param("memberId") String memberId);

    @Query("select u from Member u where u.memberId = :memberId")
    Optional<Member> findOptionalById(@Param("memberId") String memberId);

    @Query("select u from Member u where u.refreshToken = :refreshToken")
    Member findByRefreshToken(@Param("refreshToken") String refreshToken);

    @Modifying
    @Transactional
    @Query("delete from Member u where u.memberId = :memberId")
    void deleteByMemberId(@Param("memberId") String memberId);
}
