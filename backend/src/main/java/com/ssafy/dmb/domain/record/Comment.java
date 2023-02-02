package com.ssafy.dmb.domain.record;


import com.ssafy.dmb.domain.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
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

    @Column(nullable = false)
    private String commentText;

    @Column(columnDefinition = "DATETIME default now()")
    private LocalDateTime commentDate;

    @Builder
    public Comment(Record record, User user, String commentText) {
        this.record = record;
        this.user = user;
        this.commentText = commentText;
    }
}
