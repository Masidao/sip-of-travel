import { useEffect, useState } from "react";
import { ScrollArea } from "../../styles/layout.style";
import SearchBox from "../searchBox/SearchBox";
import styled from "styled-components";

interface NewPlace {
  id: string;
  place_name: string;
  address_name: string;
}

const SearchPlace: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState<NewPlace[]>([]);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

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

  return (
    <>
      <SearchBox
        placeholder="장소를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onIconClick={handleSearch}
      />
      <ScrollArea>
        {places.length > 0 ? (
          places.map(({ id, place_name, address_name }) => (
            <PlaceItem key={id}>
              <ItemTitle>{place_name}</ItemTitle>
              <ItemAddress>{address_name}</ItemAddress>
            </PlaceItem>
          ))
        ) : (
          <Message>검색 결과가 없습니다.</Message>
        )}
      </ScrollArea>
    </>
  );
};

const PlaceItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

const ItemAddress = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
`;

const Message = styled.div`
  font-size: 1.5rem;
  color: #858585;
  height: inherit;
  text-align: center;
  align-content: center;
`;

export default SearchPlace;
