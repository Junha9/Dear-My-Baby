import { CustomOverlayMap, Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import './Record.css';
import RecordUpload from './RecordUpload';

const RecordMap = () => {
  // 현재 위치에 기록 남기기 (업로드) 추가 해야함 => 아이콘 바꿔서 찍고 기록 데이터 저장

  const [modalOpen, setModalOpen] = useState(false);

  const [state, setState] = useState({
    center: {
      lat: 37.5128064,
      lng: 127.0284288,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: '현재 위치를 불러올 수 없어요',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <div>
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={4}
        draggable={true}
      >
        {!state.isLoading && state.errMsg ? (
          <CustomOverlayMap position={state.center}>
            <div
              style={{
                padding: '10px',
                backgroundColor: 'orange',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p>현재 위치를 불러올 수 없습니다</p>
              <p>위치 액세스를 허용해주세요</p>
            </div>
          </CustomOverlayMap>
        ) : (
          <CustomOverlayMap
            position={{
              lat: state.center.lat,
              lng: state.center.lng,
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
                onClick={() => setModalOpen(true)}
                className="recording-foot"
              />
              <div className="center recording-msg">현재 위치에 발자국을 남겨보세요</div>
            </div>
          </CustomOverlayMap>
        )}
      </Map>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {!state.errMsg ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button className="recording-btn">카메라</button>
              <RecordUpload></RecordUpload>
            </div>
          ) : (
            <div>위치를 불러올 수 없어요!</div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default RecordMap;
