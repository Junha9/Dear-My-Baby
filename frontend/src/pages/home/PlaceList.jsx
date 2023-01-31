import PropTypes from 'prop-types';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
  return (
    <>
      {places.map((place) => (
        <PlaceItem key={place.placeId} place={place}></PlaceItem>
      ))}
    </>
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeId: PropTypes.number,
      placeName: PropTypes.string,
      placeType: PropTypes.number,
      placeImg: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  ),
};

export default PlaceList;