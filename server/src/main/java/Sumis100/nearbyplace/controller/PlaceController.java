package Sumis100.nearbyplace.controller;

import Sumis100.nearbyplace.service.PlaceService;
import Sumis100.nearbyplace.service.dto.PlaceResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaceController {

    private final PlaceService placeService;

    public PlaceController(PlaceService placeService){
        this.placeService = placeService;
    }

  /*  @GetMapping("/place/search")
    public ResponseEntity<PlaceResponse> searchPlaceByKeyword(@RequestParam String keyword){
        PlaceResponse placeResponse = placeService.searchPlaceByKeyword(keyword);

        return ResponseEntity.ok(placeResponse);
    }*/
    @GetMapping("/place/search")
    public ResponseEntity<List<PlaceResponse>> searchPlaceByKeyword(@RequestParam String keyword){
        List<PlaceResponse> placeResponse = placeService.searchPlaceByKeyword(keyword);

        return ResponseEntity.ok(placeResponse);
    }

}
