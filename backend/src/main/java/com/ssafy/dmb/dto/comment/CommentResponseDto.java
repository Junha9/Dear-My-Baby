package com.ssafy.dmb.dto.comment;

import com.ssafy.dmb.domain.record.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {

    private Long commentId;

    private Long userNo;

    private String userName;

    private Long recordId;

    private String commentText;

    private LocalDateTime commentDate;

    public CommentResponseDto(Comment comment) {
        commentId = comment.getId();
        userNo = comment.getUser().getNo();
        userName = comment.getUser().getUserName();
        recordId = comment.getRecord().getId();
        commentText = comment.getCommentText();
        commentDate = comment.getCommentDate();
    }
}

