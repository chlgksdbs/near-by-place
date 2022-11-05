package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review {
    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "PLACE_ID")
    private Long placeId;

    @Column(name = "CONTENT", nullable = false, length = 50)
    private String content;

    @Column(name = "CREATED_AT")
    private LocalDate cratedAt;

    @ManyToOne
    @JoinColumn(name = "ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ID")
    private Place place;
}
