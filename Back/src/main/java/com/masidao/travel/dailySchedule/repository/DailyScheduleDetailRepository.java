package com.masidao.travel.dailySchedule.repository;

import com.masidao.travel.dailySchedule.entity.DailyScheduleDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DailyScheduleDetailRepository extends JpaRepository<DailyScheduleDetail, Long> {
    int countByDailyScheduleId(Long dailyScheduleId);

    List<DailyScheduleDetail> findByDailyScheduleIdOrderBySequenceAsc(Long dailyScheduleId);
}
