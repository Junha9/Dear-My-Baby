import PropTypes from 'prop-types';
import { records } from './props';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import AlbumMapItem from './AlbumMapItem';

export default function AlbumMapCluster({ records, handleRecordId }) {
  return (
    <MarkerClusterer
      averageCenter={true}
      minLevel={1}
      // disableClickZoom={true}
      // onClusterclick={(recordIds) => recordIds.map((record) => handleRecordId(record))}
    >
      {records.map((record) => (
        <AlbumMapItem key={record.recordId} record={record} handleRecordId={handleRecordId}></AlbumMapItem>
      ))}
    </MarkerClusterer>
  );
}

AlbumMapCluster.propTypes = {
  records,
  handleRecordId: PropTypes.func,
};
