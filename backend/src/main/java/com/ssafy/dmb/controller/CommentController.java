package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.dto.CommentResponseDto;
import com.ssafy.dmb.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/comment")
public class CommentController {
    private CommentService commentService;

    @PostMapping()
    public Stirng saveComment(@RequestParam("commentText") CommentDto commentDto) throws IOException {
        commentService.saveComment(commentDto);
        return "ok";
    }

    @GetMapping("/comments")
    public List<CommentResponseDto> getCommentList(@RequestParam("recordId") Long recordId) throws IOException {
        return commentService.getCommentList(recordId);
    }

    public void deleteComment(@RequestParam("commentId") Long commentId) throws IOException {
        commentService.deleteComment(commentId);
    }
}
