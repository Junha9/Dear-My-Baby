import PropTypes from 'prop-types';
import { record } from './props';
import { MapMarker } from 'react-kakao-maps-sdk';

export default function AlbumMapItem({ record, handleRecordId }) {
  return (
    <MapMarker
      position={{
        lat: record.latitude,
        lng: record.longitude,
      }}
      image={{
        src: 'https://cdn-icons-png.flaticon.com/512/1943/1943015.png',
        size: {
          width: 50,
          height: 50,
        },
      }}
      title={record.recordId}
      onClick={(marker) => handleRecordId && handleRecordId(marker.getTitle())}
    ></MapMarker>
  );
}

AlbumMapItem.propTypes = {
  record,
  handleRecordId: PropTypes.func,
};
