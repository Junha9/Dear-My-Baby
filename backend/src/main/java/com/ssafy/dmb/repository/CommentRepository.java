package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.record.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
