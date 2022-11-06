package Sumis100.nearbyplace.service.dto;

import Sumis100.nearbyplace.domain.Place;
import org.springframework.stereotype.Component;

@Component
public class PlaceResponseConverter {

    public PlaceResponse toPlaceResponse(Place place) {
        return PlaceResponse.builder()
                .id(place.getId())
                .name(place.getName())
                .address(place.getAddress())
                .description(place.getDescription())
                .longitude(place.getLongitude())
                .latitde(place.getLatitude())
                .gradeAvg(place.getGradeAvg())
                .build();
    }

}
