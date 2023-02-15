import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import DummyPlaceItem from './DummyPlaceItem';

const DummyPlaceList = ({ placeList }) => {
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
        {placeList.map((place, index) => (
          <DummyPlaceItem key={index} place={place}></DummyPlaceItem>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default DummyPlaceList;
