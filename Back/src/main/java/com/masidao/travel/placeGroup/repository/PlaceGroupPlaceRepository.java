package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.placeGroup.entity.PlaceGroupPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceGroupPlaceRepository extends JpaRepository<PlaceGroupPlace, Long>, PlaceGroupPlaceRepositoryCustom {

}
