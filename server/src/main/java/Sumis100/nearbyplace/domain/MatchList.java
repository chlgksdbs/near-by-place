package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MatchList {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CURRENT_MEMBER")
    private Long currentMember;

    @Column(name = "MAX_MEMBER")
    private Long maxMember;

    @CreationTimestamp
    @Column(name = "START_AT")
    private LocalDate statAt;

    @CreationTimestamp
    @Column(name = "END_AT")
    private LocalDate endAt;

    @ManyToOne
    @JoinColumn(name = "ID")
    private User user;

}
