package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.record.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select r from Comment r where r.record.id = :recordId")
    List<Comment> findAllByRecordId(@Param("recordId") Long recordId);

}
