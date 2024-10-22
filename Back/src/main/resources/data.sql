-- 초기 데이터 삽입
INSERT INTO cities (name, image_url, latitude, longitude, level) VALUES
                                                                     ('서울', 'https://example.com/images/seoul.jpg', 37.5665, 126.9780, 10),
                                                                     ('부산', 'https://example.com/images/busan.jpg', 35.1796, 129.0756, 12),
                                                                     ('인천', 'https://example.com/images/incheon.jpg', 37.4563, 126.7052, 8),
                                                                     ('대구', 'https://example.com/images/daegu.jpg', 35.8714, 128.6014, 9),
                                                                     ('대전', 'https://example.com/images/daejeon.jpg', 36.3504, 127.3845, 11),
                                                                     ('광주', 'https://example.com/images/gwangju.jpg', 35.1595, 126.8526, 7),
                                                                     ('제주', 'https://example.com/images/jeju.jpg', 33.4996, 126.5312, 5);


INSERT INTO members (nickname, loginId, password) VALUES
                                                      ('다오', 'dao', '1234'),
                                                      ('마롱', 'marron', '1234'),
                                                      ('시드', 'sid', '1234');


-- Travel Plans data
INSERT INTO travel_plans (member_id, city_id, start_date, end_date) VALUES
                                                                        (1, 1, '2024-10-01', '2024-10-07'),
                                                                        (2, 2, '2024-11-05', '2024-11-12'),
                                                                        (3, 3, '2024-12-20', '2024-12-27');

-- Place Groups data (multiple groups for one travel plan)
INSERT INTO place_groups (travel_plan_id, name, amount) VALUES
                                                            (1, '서울 역사적 명소', 2),
                                                            (1, '서울 랜드마크', 1),
                                                            (2, '부산 해변', 1),
                                                            (3, '제주 랜드마크', 2),
                                                            (3, '제주 마을', 1),
                                                            (1, '서울 맛집', 3);

-- Places data
INSERT INTO places (name, kakao_place_id, address, category, latitude, longitude) VALUES
                                                                      ('경복궁', 1111, '서울특별시 종로구 사직로 161', '역사적', 37.579617, 126.977041),
                                                                      ('남산 타워', 2222, '서울특별시 용산구 남산공원길 105', '랜드마크', 37.551169, 126.988227),
                                                                      ('해운대 해수욕장', 3333, '부산광역시 해운대구 해운대해변로 264', '해변', 35.158698, 129.160384),
                                                                      ('제주 돌문화 공원', 4444, '제주특별자치도 제주시 조천읍 남조로 2023-95', '공원', 33.423898, 126.635754),
                                                                      ('제주 민속촌', 5555, '제주특별자치도 서귀포시 표선면 민속해안로 631-34', '마을', 33.325297, 126.832490);

-- Place Groups Places data (one travel plan with multiple groups)
INSERT INTO place_groups_places (group_id, place_id) VALUES
                                                         (1, 1),  -- 경복궁 in 서울 역사적 명소
                                                         (1, 2),  -- 남산 타워 in 서울 역사적 명소
                                                         (2, 2),  -- 남산 타워 in 서울 랜드마크 (same place, different group)
                                                         (3, 3),  -- 해운대 해수욕장 in 부산 해변
                                                         (4, 4),  -- 제주 돌문화 공원 in 제주 랜드마크
                                                         (4, 5),  -- 제주 민속촌 in 제주 랜드마크
                                                         (5, 5),  -- 제주 민속촌 in 제주 마을 (same place, different group)
                                                         (1, 3);  -- 서울 맛집

-- Daily Schedules data (make sure these IDs match the plan_day_id in daily_schedule_details)
INSERT INTO daily_schedules (travel_plan_id, sequence, date) VALUES
                                                                 (1, 1, '2024-10-01'),  -- ID = 1
                                                                 (1, 2, '2024-10-02'),  -- ID = 2
                                                                 (2, 1, '2024-11-06'),  -- ID = 3
                                                                 (3, 1, '2024-12-21'),  -- ID = 4
                                                                 (3, 2, '2024-12-22');  -- ID = 5

-- Daily Schedule Details data (updated plan_day_id to match daily_schedules IDs)
INSERT INTO daily_schedule_details (plan_day_id, place_id, sequence) VALUES
                                                                         (1, 1, 1),  -- 경복궁 on 1st day of 서울 trip
                                                                         (1, 2, 2),  -- 남산 타워 on 1st day of 서울 trip
                                                                         (3, 3, 1),  -- 해운대 해수욕장 on 1st day of 부산 trip
                                                                         (4, 4, 1),  -- 제주 돌문화 공원 on 1st day of 제주 trip
                                                                         (4, 5, 2),  -- 제주 민속촌 on 1st day of 제주 trip
                                                                         (5, 5, 1);  -- 제주 민속촌 on 2nd day of 제주 trip (visited again)