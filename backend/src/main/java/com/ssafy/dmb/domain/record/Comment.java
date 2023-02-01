package com.ssafy.dmb.domain.record;


import com.ssafy.dmb.domain.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    private String commentText;

    private LocalDate commentDate;

    @Builder
    public Comment(Record record, User user, String commentText, LocalDate commentDate) {
        this.record = record;
        this.user = user;
        this.commentText = commentText;
        this.commentDate = commentDate;
    }

}
