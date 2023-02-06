package com.ssafy.dmb.domain;

import com.ssafy.dmb.domain.record.Comment;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id @GeneratedValue
    @Column(name = "user_no")
    private Long no;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String userEmail;

    @Column(nullable = false)
    private String userPassword;

    @Column(nullable = false)
    private String userId;

    private String userImg;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<FamilyUser> familyUser = new ArrayList<>();

    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public User(String userName, String userEmail, String userPassword, String userId, String userImg) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userId = userId;
        this.userImg = userImg;
    }

}
