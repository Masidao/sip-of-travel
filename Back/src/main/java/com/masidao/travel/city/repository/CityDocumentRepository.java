package com.masidao.travel.city.repository;

import com.masidao.travel.city.entity.CityDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface CityDocumentRepository extends ElasticsearchRepository<CityDocument, Long> {
}
