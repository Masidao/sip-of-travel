package com.masidao.travel.city.controller;

import com.masidao.travel.city.dto.CityListResponse;
import com.masidao.travel.city.service.CityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@RequiredArgsConstructor
public class CityController {

    private final CityService cityService;

    @GetMapping
    public List<CityListResponse> getCities() {
        return cityService.getCities();
    }
}
