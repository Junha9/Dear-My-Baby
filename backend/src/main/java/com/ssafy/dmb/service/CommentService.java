package com.ssafy.dmb.service;

import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.dto.CommentResponseDto;

import java.util.List;

public interface CommentService {


    CommentResponseDto saveComment(CommentDto commentDto);

    List<CommentResponseDto> getCommentList(Long recordId);

    void deleteComment(Long commentId);


}
