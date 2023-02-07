package com.ssafy.dmb.domain;

import com.ssafy.dmb.domain.record.Comment;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_no")
    private Long no;

    @Column(nullable = false)
    private String memberName;

    @Column(nullable = false)
    private String memberEmail;

    @Column(nullable = false)
    private String memberPassword;

    @Column(nullable = false)
    private String memberId;

    private String memberImg;

    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<FamilyUser> familyUser = new ArrayList<>();

    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @Column(columnDefinition = "DATETIME default now()")
    private LocalDateTime joinDate;

    @Builder
    public Member(String memberName, String memberEmail, String memberPassword, String memberId, String memberImg) {
        this.memberName = memberName;
        this.memberEmail = memberEmail;
        this.memberPassword = memberPassword;
        this.memberId = memberId;
        this.memberImg = memberImg;
    }


}
