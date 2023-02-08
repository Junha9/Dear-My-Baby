import { CustomOverlayMap } from 'react-kakao-maps-sdk';

function RecordMapItem(record) {
  return (
    <div>
    <CustomOverlayMap
    position={{
      lat: record.record.latitude,
      lng: record.record.longitude,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="/assets/footprint.png"
        style={{
          width: '40px',
          height: '40px',
          marginBottom: '5px',
        }}
        alt="record foot"
      />
    </div>
  </CustomOverlayMap>
  </div>
  );
}
export default RecordMapItem;
