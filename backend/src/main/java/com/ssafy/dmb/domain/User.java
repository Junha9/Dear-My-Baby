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

    private String userName;

    private String userEmail;

    private String userPassword;

    @Enumerated(EnumType.ORDINAL)
    private UserValid uservalid; // 1 - valid, 2 - withdrawn

    private String userId;

    private String userImg;

    @OneToMany(mappedBy = "user")
    private List<FamilyUser> familyUser = new ArrayList<>();







}
