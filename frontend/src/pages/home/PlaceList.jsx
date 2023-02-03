import PropTypes from 'prop-types';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
  return (
    <>
      {/* {places.map((place, index) => (
        <>
        <img src={place.placeImg}></img>
        <p key={index}>{place.placeName} </p>
        </>
      ))} */}
      <div className="placeFrame">
        {places.map((place) => (
          <PlaceItem key={place.placeId} place={place}></PlaceItem>
        ))}
      </div>
    </>
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
