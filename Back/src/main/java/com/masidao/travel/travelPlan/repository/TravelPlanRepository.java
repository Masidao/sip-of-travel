package com.masidao.travel.travelPlan.repository;

import com.masidao.travel.travelPlan.entity.TravelPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelPlanRepository extends JpaRepository<TravelPlan, Long> {
}
