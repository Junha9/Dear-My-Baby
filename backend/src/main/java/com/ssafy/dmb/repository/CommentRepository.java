package com.ssafy.dmb.repository;

import com.ssafy.dmb.domain.record.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface CommentRepository extends JpaRepository<Comment, Long> {


}
