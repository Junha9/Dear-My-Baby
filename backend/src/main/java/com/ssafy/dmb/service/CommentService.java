package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.record.Comment;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.repository.CommentRepository;
import com.ssafy.dmb.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
//    @Autowired
    private RecordRepository recordRepository;

    public List<CommentDto> comments(Long recordId) {
        // 조회 : 댓글 목록
//        List<Comment> comments = commentRepository.findById(recordId);
        // 반환: 엔티티 -> DTO
//        List<CommentDto> dtos = new ArrayList<CommentDto>();
//        for (int i = 0; i < comments.size(); i++) {
//            Comment c = comments.get(i);
//            CommentDto dto = CommentDto.create
//            dtos.add(dto);
//        }
        return commentRepository.findById(recordId)
                .stream()
                .map(comment -> CommentDto.createCommentDto(comment))
                .collect(Collectors.toList());
    }
    @Transactional
    public CommentDto create(Long recordId, CommentDto dto) {
        // 게시글 조회 및 예외 발생
        Record record = recordRepository.findById(recordId)
                .orElseThrow(() -> new IllegalArgumentException("댓글 생성 실패"));
        // 댓글 엔티티 생성
        Comment comment = Comment.createComment(dto, record);
        // 댓글 엔티티를 DB로 저장
        Comment created = commentRepository.save(comment);
        // DTO 로 변경하여 반환
        return CommentDto.createCommentDto(created);
    }

    @Transactional
    public CommentDto update(Long id, CommentDto dto) {
        // 댓글 조회 및 예외 발생
        Comment target = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("댓글 수정 실패, 글이 없음"));
        // 댓글 수정
        target.patch(dto);
        // DB 로 갱신
        Comment updated = commentRepository.save(target);
        // 댓글 엔티티를 DTO 로 변환 및 반환
        return CommentDto.createCommentDto(updated);
    }

    @Transactional
    public CommentDto delete(Long id) {
        // 댓글 조회 및 예외 발생
        Comment target = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("댓글 삭제 실패"));
        //댓글을 DB 에서 삭제
        commentRepository.delete(target); // 반환값이 존재하지 않는다.
        // 삭제 댓글을 DTO 로 반환
        return CommentDto.createCommentDto(target);
    }



}
