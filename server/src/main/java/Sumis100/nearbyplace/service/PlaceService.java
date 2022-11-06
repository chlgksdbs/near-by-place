package Sumis100.nearbyplace.service;

import Sumis100.nearbyplace.domain.Place;
import Sumis100.nearbyplace.repository.PlaceRepository;
import Sumis100.nearbyplace.service.dto.PlaceResponse;
import Sumis100.nearbyplace.service.dto.PlaceResponseConverter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final PlaceResponseConverter placeResponseConverter;

    public PlaceService(PlaceRepository placeRepository, PlaceResponseConverter placeResponseConverter) {
        this.placeRepository = placeRepository;
        this.placeResponseConverter = placeResponseConverter;
    }

    public PlaceResponse searchPlaceByKeyword(String keyword) {
        Place place = placeRepository.findByNameContaining(keyword)
                .orElseThrow(RuntimeException::new);

        return placeResponseConverter.toPlaceResponse(place);
    }
}
