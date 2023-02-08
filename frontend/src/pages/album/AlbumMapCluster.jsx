import PropTypes from 'prop-types';
import { record, records } from './props';
import { MarkerClusterer, Polyline } from 'react-kakao-maps-sdk';
import AlbumMapItem from './AlbumMapItem';

export default function AlbumMapCluster({ records, handleRecordId }) {
  const points = records.map((record) => ({ lat: record.lat, lng: record.lng }));
  console.log(points);

  return (
    <>
      <MarkerClusterer
        averageCenter={true}
        minLevel={1}
        // disableClickZoom={true}
        // onClusterclick={(recordIds) => recordIds.map((record) => handleRecordId(record))}
      >
        {/* 발자국 모여있는곳 */}
        {records.map((record) => (
          <AlbumMapItem key={record.recordId} record={record} handleRecordId={handleRecordId}></AlbumMapItem>
        ))}
      </MarkerClusterer>

      <Polyline
        path={[points]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={'#FFAE00'} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'solid'} // 선의 스타일입니다
      />
    </>
  );
}

AlbumMapCluster.propTypes = {
  records,
  handleRecordId: PropTypes.func,
};
