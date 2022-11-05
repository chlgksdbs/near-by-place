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
    private Long id;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "address")
    private String address;

    @Column(name = "description")
    private String description;

    @Column(name = "strategy")
    private String strategy;

    // TODO 이거 다대다가 되어야 하지 않을까? 게시글 참여자도 있으니까..?
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<MatchPost> matchPosts = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<UserMatchPost> userMatchPosts = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Review> reviews = new ArrayList<>();


}
