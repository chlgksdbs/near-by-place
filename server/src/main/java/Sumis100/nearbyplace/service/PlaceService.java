package Sumis100.nearbyplace.service;

import Sumis100.nearbyplace.domain.Place;
import Sumis100.nearbyplace.repository.PlaceRepository;
import Sumis100.nearbyplace.service.dto.PlaceResponse;
import Sumis100.nearbyplace.service.dto.PlaceResponseConverter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final PlaceResponseConverter placeResponseConverter;

    public PlaceService(PlaceRepository placeRepository, PlaceResponseConverter placeResponseConverter) {
        this.placeRepository = placeRepository;
        this.placeResponseConverter = placeResponseConverter;
    }

    public List<PlaceResponse> searchPlaceByKeyword(String keyword) {
        List<Place> placeList = this.placeRepository.findByNameContaining(keyword);
        if (placeList == null || placeList.isEmpty())
            // 찾지 못할 경우 RuntimeException 던져주기
            throw new RuntimeException();
        return placeList.stream()
                .map(placeResponseConverter::toPlaceResponse)
                .collect(Collectors.toList());
    }


}
