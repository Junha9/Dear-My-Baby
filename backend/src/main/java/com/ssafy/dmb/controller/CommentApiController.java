package com.ssafy.dmb.controller;


import com.ssafy.dmb.domain.record.Comment;
import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentApiController {
    @Autowired
    private CommentService commentService;

    // 댓글 목록 조회\
    @GetMapping("/record/{recordId}/comments")
    public ResponseEntity<List<CommentDto>> comments(@PathVariable Long recordId) {
        List<CommentDto> dtos = commentService.comments(recordId);
        return ResponseEntity.status(HttpStatus.OK).body(dtos);
    }

    // 댓글 생성
    @PostMapping("/records/{recordId}/comments")
    public ResponseEntity<CommentDto> create(@PathVariable Long recordId, @RequestBody CommentDto dto) {
        // 서비스에게 위임하여 값을 가져옴
        CommentDto createdDto = commentService.create(recordId, dto);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(createdDto);
    }

    // 댓글 수정
    @PatchMapping("/record/{recordId}/comments/{id}")
    public ResponseEntity<CommentDto> update(@PathVariable Long id, @RequestBody CommentDto dto) {
        // 서비스에게 위임하여 값을 가져옴
        CommentDto updateDto = commentService.update(id, dto);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(updateDto);
    }

    // 댓글 삭제
    @DeleteMapping("/record/{recordId}/comments/{id}")
    public ResponseEntity<CommentDto> delete(@PathVariable Long id) {
        // 서비스에게 위임하여 값을 가져오고
        CommentDto updatedDto = commentService.delete(id);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(updatedDto);

    }

    }


}
