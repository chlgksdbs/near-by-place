package Sumis100.nearbyplace.repository;

import Sumis100.nearbyplace.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place,Long> {

    Optional<Place> findByNameContaining(String name);

}
