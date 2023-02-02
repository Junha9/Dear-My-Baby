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

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> favoriteSpot = new HashSet<String>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "family_id")
    private Family family;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> babyCharacter = new HashSet<String>();

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> favoriteFood = new HashSet<String>();

    @Builder
    public Baby (Set<String> favoriteSpot, Family family, Set<String> babyCharacter, Set<String> favoriteFood) {
        this.favoriteSpot = favoriteSpot;
        this.family = family;
        this.babyCharacter = babyCharacter;
        this.favoriteFood = favoriteFood;
    }


}
