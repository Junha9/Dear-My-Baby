import React from 'react';
import PropTypes from 'prop-types';
import PlaceItem from './PlaceItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PlaceList = ({ places }) => {
  const settings = {
    swipe: true,
    centerMode: true,
    centerPadding: '10px',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'carousel-slider',
  };

  return (
    <div className="SSlider">
      {/* {places.map((place, index) => (
        <>
        <img src={place.placeImg}></img>
        <p key={index}>{place.placeName} </p>
        </>
      ))} */}
      <Slider {...settings}>
        {/* <div className="placeFrame"> */}
        {places.map((place) => (
          <PlaceItem key={place.placeId} place={place}></PlaceItem>
        ))}
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
