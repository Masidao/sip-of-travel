import { useParams } from "react-router-dom";
import * as S from "../../styles/placeGroups.style";
import SearchBox from "../searchBox/SearchBox";
import { useState } from "react";
import placeGroup1 from "../../../data/placeGroup1.json";
import placeGroup2 from "../../../data/placeGroup2.json";
import StarsIcon from "../../assets/StarsIcon";
import { Button } from "../Button";

interface Place {
  id: number;
  name: string;
  category: string;
}

interface GroupData {
  id: number;
  name: string;
  places: Place[];
}

const PlaceGroups = () => {
  const { groupId } = useParams();
  const [searchPlace, setSearchPlace] = useState("");

  const groupDataMap: { [key: string]: GroupData } = {
    1: placeGroup1,
    2: placeGroup2,
  };

  const groupData = groupDataMap[Number(groupId)];
  const groupName = groupData?.name || "Unknown Group";
  // 나중엔 /api/place_groups/{place_groups_id} GET 요청

  const filteredPlaces = groupData.places.filter((place) =>
    place.name.includes(searchPlace)
  );

  return (
    <>
      <SearchBox
        placeholder={groupName}
        value={searchPlace}
        onChange={(e) => setSearchPlace(e.target.value)}
      />
      <S.Places>
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map(({ id, name, category }) => (
            <S.PlaceItem key={id}>
              <S.ItemHeader>
                <StarsIcon />
                <div>
                  <S.ItemTitle>{name}</S.ItemTitle>
                  <S.ItemCategory>{category}</S.ItemCategory>
                </div>
              </S.ItemHeader>
              <Button />
            </S.PlaceItem>
          ))
        ) : (
          <S.Message>장소를 추가해주세요</S.Message>
        )}
      </S.Places>
    </>
  );
};

export default PlaceGroups;
