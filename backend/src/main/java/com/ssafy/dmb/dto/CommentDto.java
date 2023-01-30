package com.ssafy.dmb.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.dmb.domain.record.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class CommentDto {
    private Long id;

    @JsonProperty("record_id")
    private Long recordId;
    private Long userNo;
    private String comment_text;
    private LocalDate comment_date;

    public static CommentDto createCommentDto(Comment comment) {
        return new CommentDto(
                comment.getId(),
                comment.getRecord().getId(),
                comment.getUser().getNo(),
                // username 도 가져오자
                comment.getComment_text(),
                comment.getComment_date()
        );
    }
}
