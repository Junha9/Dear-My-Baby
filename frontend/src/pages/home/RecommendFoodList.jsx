import PropTypes from 'prop-types';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const
const RecommendFoodList = ({ foodData }) => {
  const navigate = useNavigate();
  // console.log('??', item.foodData);

  return (
    <div className="recommandList">
      <button
        onClick={() =>
          // console.log(fooditem)
          navigate(`./food-detail?food-id=${foodData.id}`)
        }
      >
        <div className="food-item">
          <div className="food-info">
            <h4>{foodData.name}</h4>
            <div className="food-info-outline">
              <p className="outline-ptag">설명:{foodData.outline}</p>
            </div>
            <div className="food-catagory">
              <p>{foodData.catagory}</p>
            </div>
          </div>
          <div className="food-img">
            <img src={foodData.imgUrl} alt="restaurant" className="food-src" />
          </div>
          {/* 소개 부분에 보여 줄 데이터 */}
          {/* 상세보기 페이지 만들어서 데이터 props 해주기 라우터 어렵다.*/}
          {/* <button onClick={navigator('../recommand-item/recommand-detail')}>상세보기</button> */}
        </div>

        {/* 디테일에 보여줄 데이터 필요하면, 새로운 컴포넌트 만들거임 */}

        {/* reccomandFood list */}
      </button>
    </div>
  );
};

export default RecommendFoodList;

RecommendFoodList.propTypes = {
  foodData: PropTypes.any,
};
