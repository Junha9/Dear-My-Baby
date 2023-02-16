import PropTypes from 'prop-types';
//명칭,카테고리,이미지URL,주소,위도,경도,개요,잔화번호,주차 시설,영업시간,휴무일,대표메뉴0
//모이세해장국	밥	http://tong.visitkorea.or.kr/cms/resource/50/1860750_image2_1.jpg	제주특별자치도 제주시 연북로 221	33.4817126104	126.5051390387	계란을 풀어먹으면 더 맛있는 해장국 맛집이다. 대표메뉴는 해장국이다. 제주특별자치도 제주시에 있는 한식전문점이다.	064-746-5128	주차 가능	06:00~18:00	연중무휴	해장국

// react, components
import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import RecommendFoodList from './RecommendFoodList';
import RecommendPlaceList from './RecommendPlaceList';

// api 함수 가져오기
import {
  apiGetRecommendTourList,
  apiGetRecommendFestivalList,
  apiGetRecommendRestaurantList,
} from '@/commons/api/recommend';

// material UI
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const RecommendItem = () => {
  //  state 변수들 설정
  const [familyId, setFamilyId] = useState(null);
  const [familyName, setFamilyName] = useState('가족');
  const [restaurantList, setRestaurantList] = useState([]);
  const [tourList, setTourList] = useState([]);
  const [festivalList, setfestivalList] = useState([]);

  // api 로  정보 받아오기
  useEffect(() => {
    setFamilyId(window.localStorage.getItem('familyId'));
    console.log('glgl', familyId);
    if (familyId != null) {
      setFamilyName(window.localStorage.getItem('familyName'));
      console.log('familyID', familyId);
      apiGetRecommendRestaurantList(familyId).then(({ data }) => setRestaurantList(data));
      apiGetRecommendTourList(familyId).then(({ data }) => setTourList(data));
      // console.log('restaurantList', restaurantList);
      // console.log('tourList', tourList);
      // apiGetRecommendFestivalList(familyId).then(({ dat }) => setfestivalList(dat));
    }
  }, [familyId]);

  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [food, place] = useOutletContext();
  // console.log(food, place);
  // 음식 누르면 음식 show 넎고, 장소 클릭 하면 장소에 show, 음식에 noshow
  const [onOff, setOnOff] = useState(false);
  // console.log(onOff);

  // const location = useLocation();
  // console.log('????', location);
  // const searchParams = new URLSearchParams(location.search);
  // console.log('????????????', searchParams);

  return (
    <div>
      <div className="recommend__bar">
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
          <a onClick={() => setOnOff(true)}>
            <ToggleButton value="left" aria-label="left aligned" style={{ width: '200px', borderBottom: 'none' }}>
              음식
            </ToggleButton>
          </a>
          <a onClick={() => setOnOff(false)}>
            <ToggleButton value="center" aria-label="centered" style={{ width: '200px', borderBottom: 'none' }}>
              장소
            </ToggleButton>
          </a>
        </ToggleButtonGroup>
      </div>

      <div className="show-food-list" style={onOff ? { display: 'block' } : { display: 'none' }}>
        {restaurantList.map((restaurant) => (
          <RecommendFoodList key={restaurant.address} restaurant={restaurant}></RecommendFoodList>
        ))}
      </div>

      <div className="show-place-list" style={onOff ? { display: 'none' } : { display: 'block' }}>
        {tourList.map((tour) => (
          <RecommendPlaceList key={tour.address} tour={tour}></RecommendPlaceList>
        ))}
      </div>
    </div>
  );
};

export default RecommendItem;

RecommendItem.propTypes = {
  food: PropTypes.any,
  place: PropTypes.any,
};
