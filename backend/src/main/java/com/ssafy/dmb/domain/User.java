package com.ssafy.dmb.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
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

}
