package com.ssafy.dmb.controller;

import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CommentController {
    private CommentService commentService;
    public CommentController(CommentService commentService) {
        super();
        this.commentService = commentService;
    }
    @PostMapping("/records/{recordId}/comments")
    public ResponseEntity<CommentDto> createComment(@PathVariable long recordId, @RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(commentService.createComment(recordId, commentDto), HttpStatus.CREATED);
    }

}
