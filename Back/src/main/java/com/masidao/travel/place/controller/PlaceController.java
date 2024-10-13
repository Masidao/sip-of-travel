package com.masidao.travel.place.controller;

import com.masidao.travel.place.dto.PlaceSearchResponse;
import com.masidao.travel.place.service.PlaceService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping("/api/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/search")
    public List<PlaceSearchResponse> searchPlaces(@RequestParam String keyword) {

        return placeService.searchPlaces(keyword);
    }
}
