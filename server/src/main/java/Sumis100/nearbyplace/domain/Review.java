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
    @Column(name = "id")
    private Long id;

    @Column(name = "content", nullable = false, length = 50)
    private String content;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "place_id")
    private Place place;
}
