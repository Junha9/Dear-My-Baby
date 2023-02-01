package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.record.Comment;

public class CommentResponseDto {

    private Long commentId;

    private Long userId;

    private Long recordId;

    private String commentText;

    public CommentResponseDto(Comment comment) {
        commentId = comment.getId();
        userId = comment.getUser().getNo();
        recordId = comment.getRecord().getId();
        commentText = comment.getCommentText();
    }
}
