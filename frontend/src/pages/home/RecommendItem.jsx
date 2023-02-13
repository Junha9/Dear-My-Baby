import PropTypes from 'prop-types';
//명칭,카테고리,이미지URL,주소,위도,경도,개요,잔화번호,주차 시설,영업시간,휴무일,대표메뉴0
//모이세해장국	밥	http://tong.visitkorea.or.kr/cms/resource/50/1860750_image2_1.jpg	제주특별자치도 제주시 연북로 221	33.4817126104	126.5051390387	계란을 풀어먹으면 더 맛있는 해장국 맛집이다. 대표메뉴는 해장국이다. 제주특별자치도 제주시에 있는 한식전문점이다.	064-746-5128	주차 가능	06:00~18:00	연중무휴	해장국

import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import RecommendFoodDetail from './RecommendFoodDetail';
import RecommendFoodList from './RecommendFoodList';
import RecommendPlaceList from './RecommendPlaceList';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const RecommendItem = () => {

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
      <div className='recommend__bar'>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
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
        {food.map((item) => (
          <RecommendFoodList key={item.address} foodData={item}></RecommendFoodList>
        ))}
      </div>

      <div className="show-place-list" style={onOff ? { display: 'none' } : { display: 'block' }}>
        {place.map((item) => (
          <RecommendPlaceList key={item.address} data={item}></RecommendPlaceList>
        ))}
      </div>
    </div >
  );
};

export default RecommendItem;

RecommendItem.propTypes = {
  food: PropTypes.any,
  place: PropTypes.any,
};
