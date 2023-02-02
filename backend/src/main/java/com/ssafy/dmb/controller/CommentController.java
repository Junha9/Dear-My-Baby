package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.comment.CommentDto;
import com.ssafy.dmb.dto.comment.CommentResponseDto;
import com.ssafy.dmb.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/comment")
public class CommentController {
    private final CommentService commentService;

    @PostMapping()
    public String saveComment(@RequestBody CommentDto commentDto) throws IOException {
        System.out.println("요청옴");
        commentService.saveComment(commentDto);
        return "ok";
    }

    @GetMapping("/comments")
    public List<CommentResponseDto> getCommentList(@RequestParam("recordId") Long recordId) throws IOException {
        return commentService.getCommentList(recordId);
    }

    @DeleteMapping()
    public void deleteComment(@RequestParam("commentId") Long commentId) throws IOException {
        commentService.deleteComment(commentId);
    }
}
