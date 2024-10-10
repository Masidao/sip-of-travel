package com.masidao.travel.city.repository;

import com.masidao.travel.city.dto.CityProjection;
import com.masidao.travel.city.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {
    List<CityProjection> findAllProjectedBy();

    List<CityProjection> findByName(String cityName);
}
