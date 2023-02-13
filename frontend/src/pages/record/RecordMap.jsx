import { CustomOverlayMap, Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import './Record.css';
import RecordUpload from './RecordUpload';
import RecordMapItem from './RecordMapItem';
import { apiGetRecordList } from '@/commons/api/record';

const dummyRecords = [
  {
    recordId: 1,
    dayId: 1,
    recordFile: 'string',
    latitude: '37.5228',
    longitude: '127.0184',
    recordType: 0,
    fileUrl: 'string',
    recordDate: '2023-02-06T10:44:59.097Z',
  },
  {
    recordId: 2,
    dayId: 1,
    recordFile: 'string',
    latitude: '37.513',
    longitude: '127.05',
    recordType: 0,
    fileUrl: 'string',
    recordDate: '2023-02-06T10:44:59.097Z',
  },
  {
    recordId: 3,
    dayId: 1,
    recordFile: 'string',
    latitude: '37.514',
    longitude: '127.04',
    recordType: 0,
    fileUrl: 'string',
    recordDate: '2023-02-06T10:44:59.097Z',
  },
];

const RecordMap = () => {
  // 현재 위치에 기록 남기기 (업로드) 추가 해야함 => 아이콘 바꿔서 찍고 기록 데이터 저장
  const [records, setRecords] = useState(dummyRecords);

  console.log(records);
  const [modalOpen, setModalOpen] = useState(false);

  const [state, setState] = useState({
    center: {
      lat: 37.5128064,
      lng: 127.0284288,
    },
    errMsg: null,
    isLoading: true,
  });

  //  const makeFootprint = () => {
  //   const prev = records
  //   setRecords(prev.map((e) => {
  //     return {
  //       ...e,
  //       latitude: state.center.lat,
  //       longitude: state.center.lng,
  //     }
  //   }))
  //  }

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

  const points = records.map((record) => ({ lat: record.latitude, lng: record.longitude }));

  const handleRecordReload = () => {
    apiGetRecordList(6, 13).then(({ data }) => {
      setRecords(data);
      console.log(data);
    });
  };

  return (
    <div>
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: '92.5vh',
        }}
        level={5}
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
                  width: '35px',
                  height: '35px',
                  marginBottom: '5px',
                }}
                onClick={() => {
                  // makeFootprint();
                  setModalOpen(true);
                }}
                className="recording-foot"
                alt="record foot"
              />
              <div className="center recording-msg">현재 위치에 발자국을 남겨보세요</div>
            </div>
          </CustomOverlayMap>
        )}

        {records.map((record) => {
          return <RecordMapItem key={record.recordId} record={record}></RecordMapItem>;
        })}

        <Polyline
          path={[points]}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#FFAE00'} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />
      </Map>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: '50',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            p: 2,
          }}
        >
          {!state.errMsg ? (
            <div>
              <RecordUpload handleRecordReload={handleRecordReload} recordLocation={state}></RecordUpload>
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
