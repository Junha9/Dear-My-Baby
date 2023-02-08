package com.ssafy.dmb.domain.record;


import com.ssafy.dmb.domain.user.Member;
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
    @JoinColumn(name = "member_no")
    private Member member;

    @Column(nullable = false)
    private String commentText;

    @Column(columnDefinition = "DATETIME default now()")
    private LocalDateTime commentDate;

    @Builder
    public Comment(Record record, Member member, String commentText) {
        this.record = record;
        this.member = member;
        this.commentText = commentText;
    }
}
