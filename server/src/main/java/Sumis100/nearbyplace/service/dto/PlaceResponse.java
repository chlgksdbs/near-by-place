package Sumis100.nearbyplace.service.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PlaceResponse {

    private Long id;

    private String name;

    private String address;

    private String description;

    private Long longitude;

    private Long latitude;

    private Long gradeAvg;

    @Builder
    public PlaceResponse(Long id, String name, String address, String description, Long longitude, Long latitde, Long gradeAvg) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitde;
        this.gradeAvg = gradeAvg;
    }

}
