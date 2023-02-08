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

    private String memberId;

    private String userName;

    private Long recordId;

    private String commentText;

    private LocalDateTime commentDate;

    public CommentResponseDto(Comment comment) {
        commentId = comment.getId();
        memberId = comment.getMember().getMemberId();
        userName = comment.getMember().getMemberName();
        recordId = comment.getRecord().getId();
        commentText = comment.getCommentText();
        commentDate = comment.getCommentDate();
    }

}

