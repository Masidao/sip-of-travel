package com.masidao.travel.city.entity;


import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Setting;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "cities")
@Setting(replicas = 0)
public class CityDocument {

    @Id
    private Long id;

    private String name;
    private double latitude;
    private double longitude;
}
