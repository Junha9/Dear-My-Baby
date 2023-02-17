/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendPlaceList = ({ tour }) => {
  const navigate = useNavigate();
  // console.log(tour);

  return (
    <div className="recommendList" style={{ width: '45%' }}>
      <a
        onClick={() =>
          // console.log(fooditem)
          navigate(`./place-detail?place-id=${tour.tourId}`)
        }
      >
        <div className="reco-tour">
          <div className="reco-info">
            <h4>{tour.tourName}</h4>
            <div className="reco-info-outline">{/* <p className="outline-ptag">설명:{tour.outline}</p> */}</div>
            <div className="reco-catagory">
              <p>{tour.catagory}</p>
            </div>
          </div>
          <div className="reco-img">
            <img src={tour.tourImgUrl} alt="restaurant" className="reco-src" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default RecommendPlaceList;
RecommendPlaceList.propTypes = {
  tour: PropTypes.any,
};
