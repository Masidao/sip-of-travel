import { useNavigate, useParams } from "react-router-dom";
import * as S from "../../styles/placeGroups.style";
import SearchBox from "../searchBox/SearchBox";
import { useState } from "react";
import placeGroup1 from "../../../data/placeGroup1.json";
import placeGroup2 from "../../../data/placeGroup2.json";
import StarsIcon from "../../assets/StarsIcon";
import usePlaceStore from "../../stores/usePlaceStore";
import {
  AddButton,
  SelectedButton,
  ToggleButton,
} from "../../styles/button.style";
import { Footer } from "../../styles/layout.style";

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

interface PlaceGroupsProps {
  mode: "group" | "schedule"; // 그룹 추가인지 일정 추가인지
}

const PlaceGroups = ({ mode }: PlaceGroupsProps) => {
  const { groupId, dailyScheduleId } = useParams();
  const [searchPlace, setSearchPlace] = useState("");
  const { selectedPlacesBySchedule, addPlace, removePlace } = usePlaceStore();

  const navigate = useNavigate();

  const groupDataMap: { [key: string]: GroupData } = {
    1: placeGroup1,
    2: placeGroup2,
  };

  const effectiveGroupId = mode === "schedule" ? "1" : groupId;
  const groupData = groupDataMap[Number(effectiveGroupId)];

  const groupName =
    mode === "schedule" ? `Day ${dailyScheduleId}` : groupData?.name;

  const filteredPlaces = groupData?.places.filter((place) =>
    place.name.includes(searchPlace)
  );

  const selectedPlaces = selectedPlacesBySchedule[dailyScheduleId || ""] || [];

  const isPlaceSelected = (placeId: number) =>
    selectedPlaces.some((selectedPlace) => selectedPlace.id === placeId);

  const handlePlaceToggle = (place: Place) => {
    if (isPlaceSelected(place.id)) {
      removePlace(dailyScheduleId || "", place.id);
    } else {
      addPlace(dailyScheduleId || "", place);
    }
  };

  const handleSave = () => {
    console.log(`${dailyScheduleId}:`, selectedPlaces);
    // 나중엔 /api/schedules/{daily_schedule_id}/places POST
    navigate(-1);
  };

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
              {mode === "schedule" && (
                <SelectedButton
                  checked={isPlaceSelected(id)}
                  onClick={() => handlePlaceToggle({ id, name, category })}
                >
                  {isPlaceSelected(id) ? "선택 완료" : "선택"}
                </SelectedButton>
              )}
            </S.PlaceItem>
          ))
        ) : (
          <S.Message>장소를 추가해주세요</S.Message>
        )}
      </S.Places>
      <Footer>
        {mode === "group" ? (
          <AddButton>새로운 장소 추가하기</AddButton>
        ) : (
          <ToggleButton
            onClick={handleSave}
            disabled={selectedPlaces.length === 0}
          >
            장소 저장하기
          </ToggleButton>
        )}
      </Footer>
    </>
  );
};

export default PlaceGroups;
