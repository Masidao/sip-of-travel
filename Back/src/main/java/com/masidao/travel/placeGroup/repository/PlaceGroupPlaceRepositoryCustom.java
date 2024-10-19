package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.placeGroup.entity.PlaceGroup;
import com.masidao.travel.placeGroup.entity.PlaceGroupPlace;

import java.util.List;

public interface PlaceGroupPlaceRepositoryCustom {
    List<PlaceGroupPlace> findByPlaceGroupAndPlaceIds(PlaceGroup placeGroup, List<Long> placeIds);
}
