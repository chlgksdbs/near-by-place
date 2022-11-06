package Sumis100.nearbyplace.controller;

import Sumis100.nearbyplace.domain.Place;
import Sumis100.nearbyplace.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class PlaceController {

    private final PlaceService placeService;

    @Autowired
    public PlaceController(PlaceService placeService){
        this.placeService = placeService;
    }

    @GetMapping("/place/search")
    public Optional<Place> getPlaceList(@RequestParam(required = false) String keyword){

            return placeService.searchPlace(keyword);

    }

}
