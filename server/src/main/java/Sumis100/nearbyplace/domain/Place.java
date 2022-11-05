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
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "description", nullable = false, length = 200)
    private String description;

    @Column(name = "longitude")
    private Long longitude;

    @Column(name = "latitude")
    private Long latitude;

    @Column(name = "grade_avg")
    private Long gradeAvg;

    @OneToMany(mappedBy = "place")
    private List<Review> reviewList = new ArrayList<>();

    @OneToMany(mappedBy = "place")
    private List<UserPlace> userPlaceList = new ArrayList<>();

}
