DROP TABLE IF EXISTS daily_schedule_details;
DROP TABLE IF EXISTS daily_schedules;
DROP TABLE IF EXISTS place_groups_places;
DROP TABLE IF EXISTS place_groups;
DROP TABLE IF EXISTS travel_plans;
DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS members;

CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nickname VARCHAR(50) NOT NULL,
    loginId VARCHAR(16) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE cities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    latitude FLOAT,
    longitude FLOAT
);

CREATE TABLE travel_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    city_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    FOREIGN KEY (member_id) REFERENCES members(id),
    FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE place_groups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    travel_plan_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    amount INT NOT NULL DEFAULT 0,
    FOREIGN KEY (travel_plan_id) REFERENCES travel_plans(id)
);

CREATE TABLE places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    category VARCHAR(20) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

CREATE TABLE place_groups_places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT NOT NULL,
    place_id INT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES place_groups(id),
    FOREIGN KEY (place_id) REFERENCES places(id)
);

CREATE TABLE daily_schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    travel_plan_id INT NOT NULL,
    sequence INT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (travel_plan_id) REFERENCES travel_plans(id)
);

CREATE TABLE daily_schedule_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_day_id INT NOT NULL,
    place_id INT NOT NULL,
    sequence INT NOT NULL,
    FOREIGN KEY (plan_day_id) REFERENCES daily_schedules(id),
    FOREIGN KEY (place_id) REFERENCES places(id)
);
