package com.masidao.travel.city.service;

import com.masidao.travel.city.dto.CityListResponse;
import com.masidao.travel.city.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;

    public List<CityListResponse> getCities() {
        return cityRepository.findAllProjectedBy()
                .stream()
                .map(cityProjection -> new CityListResponse(cityProjection.getId(), cityProjection.getName()))
                .toList();
    }
}
