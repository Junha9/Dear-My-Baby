package com.ssafy.dmb.domain.user;

import com.ssafy.dmb.domain.baby.Baby;
import com.ssafy.dmb.domain.plan.Plan;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Family {

    @Id @GeneratedValue
    @Column(name = "family_id")
    private Long id;

    @Column(nullable = false)
    private String familyName;

    @Column
    private String invitation;

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<FamilyUser> FamilyUser = new ArrayList<>();

    @OneToMany(mappedBy = "family")
    private List<Plan> plans = new ArrayList<>();

    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<Baby> babies = new ArrayList<>();

    @Builder
    public Family(String familyName, String invitation) {
        this.familyName = familyName;
        this.invitation = invitation;
    }
}
