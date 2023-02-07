package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface MemberRepository extends JpaRepository<Member,Long> {

    @Query("select u from Member u where u.memberId = :memberId")
    Member findByMemberId(@Param("memberId") String memberId);

    @Modifying
    @Transactional
    @Query("delete from Member u where u.memberId = :memberId")
    void deleteByMemberId(@Param("memberId") String memberId);
}
