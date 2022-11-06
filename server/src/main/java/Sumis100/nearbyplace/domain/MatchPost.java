package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MatchPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "address")
    private String address;

    @Column(name = "description")
    private String description;

    @Column(name = "current_member")
    private Long currentMember;

    @Column(name = "max_member")
    private Long maxMember;

    @Column(name = "start_at")
    private LocalDate statAt;

    @Column(name = "end_at")
    private LocalDate endAt;

    @OneToMany(mappedBy = "matchPost", fetch = FetchType.LAZY)
    private List<UserMatchPost> userMatchPosts = new ArrayList<>();

    // TODO 이거 다대다가 되어야 하지 않을까? 게시글 참여자도 있으니까..?
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id",insertable = false, updatable = false)
    private Place place;

}
