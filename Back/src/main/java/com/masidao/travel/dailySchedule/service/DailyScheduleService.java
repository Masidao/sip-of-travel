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
        DailySchedule dailySchedule = dailyScheduleRepository.findById(dailyScheduleId)
                .orElseThrow(() -> new RuntimeException("일정을 찾을 수 없습니다."));

        List<Place> places = placeRepository.findAllById(request.placesIds());

        int lastSequence = dailyScheduleDetailRepository.countByDailyScheduleId(dailyScheduleId);
        List<DailyScheduleDetail> detailsToSave = new ArrayList<>();

        for (Place place : places) {
            DailyScheduleDetail detail = DailyScheduleDetail.builder()
                    .dailySchedule(dailySchedule)
                    .place(place)
                    .sequence(++lastSequence)
                    .build();
            detailsToSave.add(detail);


        }
        dailyScheduleDetailRepository.saveAll(detailsToSave);

        List<DailyScheduleDetail> allDetails = dailyScheduleDetailRepository.findByDailyScheduleIdOrderBySequenceAsc(dailyScheduleId);
        List<DailyScheduleDetailResponse> detailResponses = allDetails.stream()
                .map(detail -> DailyScheduleDetailResponse.builder()
                        .id(detail.getId())
                        .placeId(detail.getPlace().getId())
                        .sequence(detail.getSequence())
                        .build())
                .toList();

        return DailyScheduleResponse.builder()
                .id(dailySchedule.getId())
                .places(detailResponses)
                .build();
    }
}
