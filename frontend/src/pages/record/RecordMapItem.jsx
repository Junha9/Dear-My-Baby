/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { CustomOverlayMap } from 'react-kakao-maps-sdk';

function RecordMapItem({ record, handleClick }) {
  return (
    <div>
      <CustomOverlayMap
        position={{
          lat: record.latitude,
          lng: record.longitude,
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
            onClick={handleClick}
          />
        </div>
      </CustomOverlayMap>
    </div>
  );
}
export default RecordMapItem;
