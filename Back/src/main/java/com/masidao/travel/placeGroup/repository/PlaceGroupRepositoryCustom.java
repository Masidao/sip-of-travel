package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.placeGroup.entity.PlaceGroup;

public interface PlaceGroupRepositoryCustom {
    PlaceGroup findPlaceGroupWithPlacesById(Long placeGroupId);
}
