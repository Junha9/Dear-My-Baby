package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.user.Family;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FamilyRepository extends JpaRepository<Family, Long> {

    @Query("select f from Family f where f.invitation = :invitation")
    List<Family> findAllByInvitation(@Param("invitation") String invitation);

    @Query("select f from Family f where f.invitation = :invitationCode")
    Optional<Family> findByInvitation(@Param("invitationCode") String invitationCode);

}

