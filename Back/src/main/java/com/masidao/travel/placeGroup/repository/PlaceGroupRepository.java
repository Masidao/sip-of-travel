package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.placeGroup.dto.PlaceGroupResponse;
import com.masidao.travel.placeGroup.entity.PlaceGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceGroupRepository extends JpaRepository<PlaceGroup, Long> {

    List<PlaceGroupResponse> findAllByTravelPlanId(Long travelPlanId);
}
