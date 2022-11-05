package Sumis100.nearbyplace.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Place {
    @Id
    @GeneratedValue
    @Column(name = "id")
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

}
