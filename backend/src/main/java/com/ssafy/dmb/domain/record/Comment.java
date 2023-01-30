package com.ssafy.dmb.domain.record;


import com.ssafy.dmb.domain.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter @Setter
public class Comment {

    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    // FK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="record_id")
    private Record record;

    // FK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    private String comment_text;

    private LocalDate comment_date;

    public static Comment createComment(CommentDto dto, Record record) throws IllegalAccessException {
        // 예외 발생
        if (dto.getId() != null)
            throw new IllegalAccessException("댓글 생성 실패 ! 댓글의 id가 없어야 합니다. ");
        if (dto.getRecordId() != record.getId())
            throw new IllegalAccessException("댓글 생성 실패 ! 게시글의 id가 잘못되었습니다.");

        // 예외가 발생하지 않았다면, 엔티티 생성 및 반환
        return new Comment(
                dto.getId(),
                record,
                user,
                dto.getComment_text(),
                dto.getComment_date()
        );
    }

    public void patch(CommentDto dto) throws IllegalAccessException {
        // 예외 발생
        if (this.id != dto.getId()) //URL 에서 던진 1번 id 와 Json 으로 던진 id가 다른 경우 예외 발생
            throw new IllegalAccessException("댓글 수정 실패 ! 잘못된 id가 입력되었습니다.");
        // 예외가 발생하지 않았다면, 객체를 갱신
        if (dto.getComment_text() != null)
            this.comment_text = dto.getComment_text();
        if (dto.getComment_date() != null)
            this.comment_date = dto.getComment_date();


    }





}
