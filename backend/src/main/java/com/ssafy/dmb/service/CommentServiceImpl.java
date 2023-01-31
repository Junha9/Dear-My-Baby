package com.ssafy.dmb.service;

import com.ssafy.dmb.domain.User;
import com.ssafy.dmb.domain.record.Comment;
import com.ssafy.dmb.domain.record.Record;
import com.ssafy.dmb.dto.CommentDto;
import com.ssafy.dmb.exception.ResourceNotFoundException;
import com.ssafy.dmb.repository.CommentRepository;
import com.ssafy.dmb.repository.RecordRepository;
import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService{
    private CommentRepository commentRepository;
    private RecordRepository recordRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, RecordRepository recordRepository) {
        super();
        this.commentRepository = commentRepository;
        this.recordRepository = recordRepository;
    }
    @Override
    public CommentDto createComment(long recordId, CommentDto commentDto) {
        Record record = recordRepository.findById(recordId).orElseThrow(() -> new ResourceNotFoundException());
//        Record record = recordRepository.findById(recordId).orElseThrow(() -> new ResourceNotFoundException("Record", "id", recordId));

        // set Post to comment entity
        Comment comment = mapToEntity(commentDto);
        comment.setRecord(record);
        // comment entity to DB
        Comment newComment = commentRepository.save(comment);
        return mapToDTO(newComment);
    }
    private CommentDto mapToDTO(Comment comment) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setUserId(commentDto.getUserId()); // 프론트에서 주나 ?
        commentDto.setComment_text(comment.getComment_text());
        return commentDto;
    }
    private Comment mapToEntity(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setUser(comment.getUser());
        comment.setComment_text(comment.getComment_text());
        return comment;
    }


}
