package com.masidao.travel.dailySchedule.repository;

import com.masidao.travel.dailySchedule.entity.DailyScheduleDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyScheduleDetailRepository extends JpaRepository<DailyScheduleDetail, Long> {
    int countByDailyScheduleId(Long dailyScheduleId);
}
