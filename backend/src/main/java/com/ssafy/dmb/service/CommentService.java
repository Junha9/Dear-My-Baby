package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.User;
import com.ssafy.dmb.domain.record.Comment;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.comment.CommentDto;
import com.ssafy.dmb.dto.comment.CommentResponseDto;
import com.ssafy.dmb.repository.CommentRepository;
import com.ssafy.dmb.repository.RecordRepository;
import com.ssafy.dmb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
@Transactional
public class CommentService {

    private final Logger LOGGER = LoggerFactory.getLogger(CommentService.class);

    private final CommentRepository commentRepository;
    private final RecordRepository recordRepository;
    private final UserRepository userRepository;

    public CommentResponseDto saveComment(CommentDto commentDto) {
        Long recordId = commentDto.getRecordId();
        Long userNo = commentDto.getUserNo();

        Record record = recordRepository.findById(recordId).
                orElseThrow(() -> new NoSuchElementException());
        User user = userRepository.findById(userNo).
                orElseThrow(() -> new NoSuchElementException());
        Comment comment = Comment.builder().
                record(record).
                user(user).
                commentText(commentDto.getCommentText()).
                build();

        commentRepository.save(comment);
        return null;
    }

    public List<CommentResponseDto> getCommentList(Long recordId) {
//        LOGGER.info("[getCommentList] input recordId: {}", recordId);
        List<Comment> commentList = commentRepository.findAllByRecordId(recordId);
        List<CommentResponseDto> recordCommentList = commentList.stream()
                .map(r -> new CommentResponseDto(r))
                .collect(Collectors.toList());
        return recordCommentList;
    }

    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

}
