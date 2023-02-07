package com.ssafy.dmb.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public FamilyUser(Family family, Member member, Role role) {
        this.family = family;
        this.member = member;
        this.role = role;
    }

}
