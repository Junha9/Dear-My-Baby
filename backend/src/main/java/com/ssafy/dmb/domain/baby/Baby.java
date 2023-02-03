package com.ssafy.dmb.domain.baby;

import com.ssafy.dmb.domain.Family;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Baby {

    @Id @GeneratedValue
    @Column(name="baby_id")
    private Long id;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> favoriteSpot = new HashSet<String>();

    private String babyName;

    private int babyAge;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "family_id")
    private Family family;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> favoriteFood = new HashSet<String>();

    @Builder
    public Baby (String babyName, int babyAge, Set<String> favoriteSpot, Family family, Set<String> favoriteFood) {
        this.babyName = babyName;
        this.babyAge = babyAge;
        this.favoriteSpot = favoriteSpot;
        this.family = family;
        this.favoriteFood = favoriteFood;
    }


}
