import PropTypes from 'prop-types';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendPlaceList = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.id);

  return (
    <div className="recommendList">
      <a
        onClick={() =>
          // console.log(fooditem)
          navigate(`./place-detail?place-id=${data.id}`)
        }
      >

        <div className="reco-data">
          <div className="reco-info">
            <h4>{data.name}</h4>
            <div className="reco-info-outline">
              <p className="outline-ptag">설명:{data.outline}</p>
            </div>
            <div className="reco-catagory">
              <p>{data.catagory}</p>
            </div>
          </div>
          <div className="reco-img">
            <img src={data.imgUrl} alt="restaurant" className="reco-src" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default RecommendPlaceList;
RecommendPlaceList.propTypes = {
  data: PropTypes.any,
};
