import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import { Footer } from "../../styles/layout.style";
import { SelectedButton, ToggleButton } from "../../styles/button.style";
import * as S from "../../styles/searchPlace.style";

interface NewPlace {
  id: string;
  place_name: string;
  address_name: string;
}

const SearchPlace: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState<NewPlace[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setIsKakaoLoaded(true);
    }
  }, []);

  const handleSearch = () => {
    if (!keyword || !isKakaoLoaded) return;

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data: NewPlace[], status: string) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);
      } else {
        setPlaces([]);
        console.warn("검색 결과가 없습니다.");
      }
    });
  };

  const isPlaceSelected = (id: string) => selectedPlaces.includes(id);

  const handlePlaceSelection = (id: string) => {
    setSelectedPlaces((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((placeId) => placeId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSave = () => {
    console.log(selectedPlaces);
    // 나중엔 /api/place_groups/{group_id}/places POST
    navigate(-1);
  };

  return (
    <>
      <SearchBox
        placeholder="장소를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onIconClick={handleSearch}
      />
      <S.Places>
        {places.length > 0 ? (
          places.map(({ id, place_name, address_name }) => (
            <S.PlaceItem key={id}>
              <div>
                <S.ItemTitle>{place_name}</S.ItemTitle>
                <S.ItemAddress>{address_name}</S.ItemAddress>
              </div>
              <SelectedButton
                checked={isPlaceSelected(id)}
                onClick={() => handlePlaceSelection(id)}
              >
                {isPlaceSelected(id) ? "선택 완료" : "선택"}
              </SelectedButton>
            </S.PlaceItem>
          ))
        ) : (
          <S.Message>검색 결과가 없습니다.</S.Message>
        )}
      </S.Places>
      <Footer>
        <ToggleButton
          onClick={handleSave}
          disabled={selectedPlaces.length === 0}
        >
          장소 저장하기
        </ToggleButton>
      </Footer>
    </>
  );
};

export default SearchPlace;
