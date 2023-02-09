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
            src="/assets/footprint2.png"
            style={{
              width: '30px',
              height: '30px',
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
