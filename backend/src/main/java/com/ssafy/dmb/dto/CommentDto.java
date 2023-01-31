package com.ssafy.dmb.dto;

import lombok.Data;

@Data
public class CommentDto {
    private long id;
    private long userId;
    private String comment_text;
}
