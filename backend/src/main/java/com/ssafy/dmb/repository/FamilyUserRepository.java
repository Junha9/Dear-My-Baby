package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.user.Family;
import com.ssafy.dmb.domain.user.FamilyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamilyUserRepository extends JpaRepository<FamilyUser, Long> {

    @Query("select f.family from FamilyUser f where f.member.no = :memberNo")
    List<Family> findFamilyIdByMemberNo(@Param("memberNo") Long memberNo);

}