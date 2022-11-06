package Sumis100.nearbyplace.service;

import Sumis100.nearbyplace.domain.Place;
import Sumis100.nearbyplace.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceService(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    /* search */

    public Place searchPlace(String keyword) {

        return placeRepository.findByNameContaining(keyword)
                .orElseThrow(RuntimeException::new);
    }
}
