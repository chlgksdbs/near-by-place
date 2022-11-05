package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserPlace {
    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "PLACE_ID")
    private Long placeId;

    @ManyToOne
    @JoinColumn(name = "ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ID")
    private Place place;
}
