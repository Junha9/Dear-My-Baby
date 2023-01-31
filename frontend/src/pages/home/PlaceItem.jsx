import PropTypes from 'prop-types';

export default function PlaceItem({ place }) {
  return (
    <div className="placeItem">
      <a href='/'><img src={place.placeImg} alt="random"></img></a>
      {place.placeName}
    </div>
  );
}

PlaceItem.propTypes = {
  place: PropTypes.shape({
    placeId: PropTypes.number,
    placeName: PropTypes.string,
    placeType: PropTypes.number,
    placeImg: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
};
