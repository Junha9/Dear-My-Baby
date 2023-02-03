import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
// import PersonPinIcon from '@mui/icons-material/PersonPin';

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
          height: '90vh',
        }}
        level={3}
        draggable={true}
      >
        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={{
              src: 'http://simpleicon.com/wp-content/uploads/map-marker-17.png',
              size: {
                width: 40,
                height: 40,
              },
            }}
            clickable={true}
            onClick={() => setModalOpen(true)}
          ></MapMarker>
        )}

        {state.errMsg ? (
          state.errMsg
        ) : (
          <CustomOverlayMap
            position={{
              lat: state.center.lat - 0.0001,
              lng: state.center.lng,
            }}
          >
            {/* <div className="label" style={{ color: '#000' }} onClick={() => setModalOpen(true)}> */}
            {/* <PersonPinIcon></PersonPinIcon> */}
            <span className="left"></span>
            <span className="center" style={{ color: 'red' }}>
              현재 위치에 발자국을 남겨보세요!'
            </span>
            <span className="right"></span>
            {/* </div> */}
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
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {!state.errMsg ? (
            <ul style={{ listStyle: 'none' }}>
              <li>
                <button>카메라</button>
              </li>
              <li>
                <button>사진 앨범</button>
              </li>
            </ul>
          ) : (
            <div>위치를 불러올 수 없어요!</div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default RecordMap;
