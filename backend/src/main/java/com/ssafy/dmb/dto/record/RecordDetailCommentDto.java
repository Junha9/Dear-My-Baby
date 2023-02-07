package com.ssafy.dmb.dto.record;

import com.ssafy.dmb.domain.record.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RecordDetailCommentDto {
    private Long commentId;

    private String memberId;

    private String memberName;

    private String commentText;

    private LocalDateTime commentDate;

    public RecordDetailCommentDto(Comment comment){
        this.commentId = comment.getId();
        this.memberId = comment.getMember().getMemberId();
        this.memberName = comment.getMember().getMemberName();
        this.commentText = comment.getCommentText();
        this.commentDate = comment.getCommentDate();
    }

    @Override
    public String toString() {
        return "CommentResponseDto{" +
                "commentId=" + commentId +
                ", memberId='" + memberId + '\'' +
                ", memberName='" + memberName + '\'' +
                ", commentText='" + commentText + '\'' +
                ", commentDate=" + commentDate +
                '}';
    }
}
