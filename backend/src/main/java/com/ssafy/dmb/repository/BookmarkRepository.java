package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.plan.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    @Query("select b from Bookmark b where b.plan.id = :planId")
    List<Bookmark> findByPlan(@Param("planId") Long planId);

    @Query("select b from Bookmark b where b.bookmarkAddress =:address")
    List<Bookmark> findByAddress(@Param("address") String address);


}
