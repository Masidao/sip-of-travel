package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.placeGroup.entity.PlaceGroup;
import com.masidao.travel.placeGroup.entity.PlaceGroupPlace;
import com.masidao.travel.placeGroup.entity.QPlaceGroupPlace;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlaceGroupPlaceRepositoryImpl implements PlaceGroupPlaceRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<PlaceGroupPlace> findByPlaceGroupAndPlaceIds(PlaceGroup placeGroup, List<Long> placeIds) {
        QPlaceGroupPlace placeGroupPlace = QPlaceGroupPlace.placeGroupPlace;

        return queryFactory
                .selectFrom(placeGroupPlace)
                .where(placeGroupPlace.placeGroup.eq(placeGroup)
                        .and(placeGroupPlace.place.id.in(placeIds)))
                .fetch();
    }
}
