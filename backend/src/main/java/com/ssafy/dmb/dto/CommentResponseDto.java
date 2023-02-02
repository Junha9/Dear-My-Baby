package com.ssafy.dmb.dto;

import com.ssafy.dmb.domain.record.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {
    private Long commentId;

    private String userId;

    private String userName;

    private String commentText;

    private LocalDateTime commentDate;

    public CommentResponseDto(Comment comment){
        this.commentId = comment.getId();
        this.userId = comment.getUser().getUserId();
        this.userName = comment.getUser().getUserName();
        this.commentText = comment.getCommentText();
        this.commentDate = comment.getCommentDate();
    }

    @Override
    public String toString() {
        return "CommentResponseDto{" +
                "commentId=" + commentId +
                ", userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", commentText='" + commentText + '\'' +
                ", commentDate=" + commentDate +
                '}';
    }
}
