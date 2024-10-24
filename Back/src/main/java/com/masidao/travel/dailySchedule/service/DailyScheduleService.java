package com.masidao.travel.dailySchedule.service;

import com.masidao.travel.dailySchedule.dto.DailyScheduleAddPlaceRequest;
import com.masidao.travel.dailySchedule.dto.DailyScheduleDetailResponse;
import com.masidao.travel.dailySchedule.dto.DailyScheduleResponse;
import com.masidao.travel.dailySchedule.entity.DailySchedule;
import com.masidao.travel.dailySchedule.entity.DailyScheduleDetail;
import com.masidao.travel.dailySchedule.repository.DailyScheduleDetailRepository;
import com.masidao.travel.dailySchedule.repository.DailyScheduleRepository;
import com.masidao.travel.place.entity.Place;
import com.masidao.travel.place.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DailyScheduleService {

    private final DailyScheduleRepository dailyScheduleRepository;
    private final PlaceRepository placeRepository;
    private final DailyScheduleDetailRepository dailyScheduleDetailRepository;

    @Transactional
    public DailyScheduleResponse addPlacesToSchedule(Long dailyScheduleId, DailyScheduleAddPlaceRequest request) {
        // TODO: 중복 장소 체크, 캐싱
        DailySchedule dailySchedule = dailyScheduleRepository.findById(dailyScheduleId)
                .orElseThrow(() -> new RuntimeException("일정을 찾을 수 없습니다."));

        List<DailyScheduleDetail> existingDetails = dailyScheduleDetailRepository.findByDailyScheduleIdOrderBySequenceAsc(dailyScheduleId);
        List<Long> existedPlaceIds = existingDetails.stream()
                .map(detail -> detail.getPlace().getId())
                .toList();

        List<Place> newPlaces = placeRepository.findAllById(request.placesIds()).stream()
                .filter(place -> !existedPlaceIds.contains(place.getId()))
                .toList();

        int lastSequence = existingDetails.size();
        List<DailyScheduleDetail> detailsToSave = new ArrayList<>();

        for (Place place : newPlaces) {
            DailyScheduleDetail detail = DailyScheduleDetail.builder()
                    .dailySchedule(dailySchedule)
                    .place(place)
                    .sequence(++lastSequence)
                    .build();
            detailsToSave.add(detail);
        }
        dailyScheduleDetailRepository.saveAll(detailsToSave);

        List<DailyScheduleDetailResponse> detailResponses = new ArrayList<>();

        detailResponses.addAll(existingDetails.stream()
                .map(detail -> DailyScheduleDetailResponse.builder()
                        .id(detail.getId())
                        .placeId(detail.getPlace().getId())
                        .sequence(detail.getSequence())
                        .build())
                .toList());

        detailResponses.addAll(detailsToSave.stream()
                .map(detail -> DailyScheduleDetailResponse.builder()
                        .id(detail.getId())
                        .placeId(detail.getPlace().getId())
                        .sequence(detail.getSequence())
                        .build())
                .toList());

        return DailyScheduleResponse.builder()
                .id(dailySchedule.getId())
                .places(detailResponses)
                .build();
    }
}
