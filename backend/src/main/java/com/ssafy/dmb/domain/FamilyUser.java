package com.ssafy.dmb.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class FamilyUser {

    @Id @GeneratedValue
    @Column(name = "family_user_id")
    private Long id;

    @ManyToOne(fetch= FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "family_id")
    private Family family;


    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "member_no")
    private Member member;

    @Enumerated(EnumType.STRING)
    private Role role;
}
