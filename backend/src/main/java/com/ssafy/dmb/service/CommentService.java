package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.CommentDto;

public interface CommentService {
    CommentDto createComment(long commentId, CommentDto commentDto);
}
