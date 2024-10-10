package com.masidao.travel.travelPlan.service;

import com.masidao.travel.travelPlan.dto.TravelPlanAddRequest;
import com.masidao.travel.travelPlan.dto.TravelPlanAddResponse;
import com.masidao.travel.travelPlan.dto.TravelPlanResponse;
import com.masidao.travel.travelPlan.entity.TravelPlan;
import com.masidao.travel.travelPlan.exception.InvalidDateRangeException;
import com.masidao.travel.travelPlan.repository.TravelPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TravelPlanService {
    private final TravelPlanRepository travelPlanRepository;

    public TravelPlanAddResponse addTravelPlan(TravelPlanAddRequest request) {
        if (request.startDate().isAfter(request.endDate())) {
            throw new InvalidDateRangeException();
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

    public List<TravelPlanResponse> getTravelPlans(Long memberId) {
        List<TravelPlan> travelPlans = travelPlanRepository.findByMemberId(memberId);
        return travelPlans.stream()
                .map(travelPlan -> TravelPlanResponse.builder()
                        .id(travelPlan.getId())
                        .cityId(travelPlan.getCityId())
                        .startDate(travelPlan.getStartDate())
                        .endDate(travelPlan.getEndDate())
                        .build())
                .toList();
    }
}
