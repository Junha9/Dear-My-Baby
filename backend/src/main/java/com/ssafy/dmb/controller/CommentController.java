package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.comment.CommentDto;
import com.ssafy.dmb.dto.comment.CommentResponseDto;
import com.ssafy.dmb.service.CommentService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RequiredArgsConstructor
@RestController
@Tag(name = "Comment", description = "comment API 입니다.")
@RequestMapping("/api/comment")
public class CommentController {
    private final CommentService commentService;

    @Operation(summary = "댓글 저장", description = "댓글을 저장한다.")
    @PostMapping()
    public String saveComment(@RequestBody CommentDto commentDto) throws IOException {
        System.out.println("요청옴");
        commentService.saveComment(commentDto);
        return "ok";
    }

    @Operation(summary = "댓글 리스트 조회", description = "<strong> recordId </strong>를 통해 댓글 리스트를 전체 조회한다.")
    @GetMapping("/comments")
    public List<CommentResponseDto> getCommentList(@RequestParam("recordId") Long recordId) throws IOException {
        return commentService.getCommentList(recordId);
    }

    @Operation(summary = "댓글 삭제", description = "<strong> commentId </strong>를 통해 댓글을 삭제한다.")
    @DeleteMapping()
    public void deleteComment(@RequestParam("commentId") Long commentId) throws IOException {
        commentService.deleteComment(commentId);
    }
}
