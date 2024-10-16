package com.masidao.travel.placeGroup.repository;

import com.masidao.travel.place.entity.QPlace;
import com.masidao.travel.placeGroup.entity.PlaceGroup;
import com.masidao.travel.placeGroup.entity.QPlaceGroup;
import com.masidao.travel.placeGroup.entity.QPlaceGroupPlace;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PlaceGroupRepositoryImpl implements PlaceGroupRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public PlaceGroup findPlaceGroupWithPlacesById(Long placeGroupId) {
        QPlaceGroup placeGroup = QPlaceGroup.placeGroup;
        QPlace place = QPlace.place;
        QPlaceGroupPlace placeGroupPlace = QPlaceGroupPlace.placeGroupPlace;

        return queryFactory
                .selectFrom(placeGroup)
                .leftJoin(placeGroup.places, placeGroupPlace).fetchJoin()
                .leftJoin(placeGroupPlace.place, place).fetchJoin()
                .where(placeGroup.id.eq(placeGroupId))
                .fetchOne();
    }
}
