package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "address")
    private String address;

    @Column(name = "description")
    private String description;

    @Column(name = "strategy")
    private String strategy;

    @OneToMany(mappedBy = "user") @JoinColumn(name = "user_id")
    private List<MatchList> matchLists = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserPlace> userPlaces = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Review> reviews = new ArrayList<>();


}
