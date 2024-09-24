package com.masidao.travel.travelPlan.service;

import com.masidao.travel.travelPlan.dto.TravelPlanAddRequest;
import com.masidao.travel.travelPlan.dto.TravelPlanAddResponse;
import com.masidao.travel.travelPlan.entity.TravelPlan;
import com.masidao.travel.travelPlan.repository.TravelPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TravelPlanService {
    private final TravelPlanRepository travelPlanRepository;

    public TravelPlanAddResponse addTravelPlan(TravelPlanAddRequest request) {
        if (request.startDate().isAfter(request.endDate())) {
            throw new IllegalArgumentException("시작 날짜가 종료 날짜보다 이를 수 없습니다.");
        }

        TravelPlan travelPlan = TravelPlan.builder()
                .memberId(request.memberId())
                .cityId(request.cityId())
                .startDate(request.startDate())
                .endDate(request.endDate())
                .build();
        TravelPlan savedTravelPlan = travelPlanRepository.save(travelPlan);

        return TravelPlanAddResponse.builder()
                .id(savedTravelPlan.getId())
                .build();
    }
}
