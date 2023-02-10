package com.ssafy.dmb.controller;

import com.ssafy.dmb.domain.record.Comment;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.comment.CommentDto;
import com.ssafy.dmb.dto.comment.CommentResponseDto;
import com.ssafy.dmb.repository.CommentRepository;
import com.ssafy.dmb.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Tag(name = "Comment", description = "comment API 입니다.")
@RequestMapping("/api/comment")
public class CommentController {

    private final CommentService commentService;

    private final CommentRepository commentRepository;

    @Transactional
    @Operation(summary = "댓글 저장", description = "댓글을 저장한다.")
    @PostMapping()
    public List<CommentResponseDto> saveComment(@RequestBody CommentDto commentDto) throws IOException {

        commentService.saveComment(commentDto);
        return commentService.getCommentList(commentDto.getRecordId());

    }

    @Operation(summary = "댓글 리스트 조회", description = "<strong> recordId </strong>를 통해 댓글 리스트를 전체 조회한다.")
    @GetMapping("/comments/{recordId}")
    public List<CommentResponseDto> getCommentList(@PathVariable Long recordId) throws IOException {

        return commentService.getCommentList(recordId);

    }

    @Transactional
    @Operation(summary = "댓글 삭제", description = "<strong> commentId </strong>를 통해 댓글을 삭제한다.")
    @DeleteMapping("/{commentId}")
    public List<CommentResponseDto> deleteComment(@PathVariable Long commentId) throws IOException {

        Comment comment = commentRepository.findById(commentId).get();
        Record record = comment.getRecord();

        commentService.deleteComment(commentId);

        return commentService.getCommentList(record.getId());

    }

}
