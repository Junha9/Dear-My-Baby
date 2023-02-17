/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import PlaceItem from './PlaceItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { apiGetRegion } from '@/commons/api/recommend';
import { useState, useEffect } from 'react';

const PlaceList = ({ regionList }) => {
  // 지역별 추천 정보

  // console.log(region.places, 'region');
  // console.log(region);
  // console.log(places, 'places');

  const settings = {
    swipe: true,
    centerMode: true,
    centerPadding: '10px',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: 'carousel-slider',
  };

  return (
    <div className="slider-parent">
      <Slider {...settings}>
        {/* <div className="placeFrame"> */}
        {regionList != null && regionList.map((place, index) => <PlaceItem key={index} place={place}></PlaceItem>)}
        {/* </div> */}
      </Slider>
    </div>
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeId: PropTypes.number,
      placeName: PropTypes.string,
      placeType: PropTypes.string,
      placeImg: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  ),
};

export default PlaceList;
