/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { CustomOverlayMap, Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import './Record.css';
import RecordUpload from './RecordUpload';
import RecordMapItem from './RecordMapItem';
import { apiGetDayRecord } from '@/commons/api/record';
import { useMember } from '@/commons/MemberContext';
import { apiGetRecordingDayId, apiPlanToNextDay, apiGetPlan, apiEndPlan } from '@/commons/api/plan';
import { useNavigate, useOutlet, useOutletContext, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { current } from '@reduxjs/toolkit';

const RecordMap = () => {
  // 현재 위치에 기록 남기기 (업로드) 추가 해야함 => 아이콘 바꿔서 찍고 기록 데이터 저장
  // const currentDayId = useOutletContext()?.dayId;
  const params = useParams();
  const [currentDayId, setCurrentDayId] = useState(params.currentDayId);
  const currentPlanId = params.currentPlanId;
  console.log('지금여행날', currentDayId);
  const navigate = useNavigate();

  const [currentLat, setCurrentLat] = useState(37.5128064);
  const [currentLng, setCurrentLng] = useState(127.0284288);
  const [recordList, setRecordList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // record 업로드 모달
  const [albumModalOpen, setAlbumModalOpen] = useState(false); // record 조회 모달
  const [modalRecord, setModalRecord] = useState(null);
  const [buttonCurrentDay, setbuttonCurrentDay] = useState('');

  const setNowRecords = (responseData) => {
    setRecordList(responseData);
  };

  // useEffect(() => {
  //   apiGetDayRecord(currentDayId).then(({ data }) => {
  //     setRecords(data);
  //     console.log(data);
  //   });
  // }, []);

  // console.log(points);

  // 해당 날짜 record 가져오기 ..?
  useEffect(() => {
    if (currentDayId != null) {
      apiGetDayRecord(currentDayId).then(({ data }) => {
        setRecordList(data);
      });
    }
  }, [currentDayId]);

  useEffect(() => {
    apiGetPlan(currentPlanId).then(({ data }) => {
      if (data.currentDay < data.planPeriod) {
        setbuttonCurrentDayId(Number(data.currentDay) + 1);
      }
    });
  }, [currentPlanId]);

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
          setCurrentLat(position.coords.latitude);
          setCurrentLng(position.coords.longitude);
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

  const points = recordList.map((record) => ({ lat: record.latitude, lng: record.longitude }));

  // const handleRecordReload = () => {
  //   apiGetRecordList(6, 13).then(({ data }) => {
  //     setRecords(data);
  //     console.log(data);
  //   });
  // };

  function makeHandleClick(record) {
    return () => {
      setModalRecord(record);
      setAlbumModalOpen(true);
    };
  }

  function goToNextDay() {
    apiGetPlan(currentPlanId).then(({ data }) => {
      console.log('기간', data.planPeriod);
      console.log('기간', data.currentDay);
      if (data.currentDay < data.planPeriod) {
        apiPlanToNextDay(currentPlanId, data.currentDay + 1);
        setbuttonCurrentDay(data.currentDay + 1);
        if (data.currentDay !== data.planPeriod) {
          setCurrentDayId(Number(currentDayId) + 1);
        }
      } else {
        apiEndPlan(currentPlanId);
        navigate(`/`);
      }
    });
  }

  return (
    <div>
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: '92.5vh',
          position: 'relative',
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

        {recordList.map((record) => {
          return (
            <RecordMapItem key={record.recordId} record={record} handleClick={makeHandleClick(record)}></RecordMapItem>
          );
        })}

        <button
          onClick={() => {
            goToNextDay();
          }}
          style={{ position: 'absolute', left: '45%', bottom: '5%', zIndex: '2' }}
        >
          {buttonCurrentDay !== '' ? buttonCurrentDay : 1}일차 기록 종료
        </button>
        <Polyline
          path={[points]}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={'#CB5CFF'} // 선의 색깔입니다
          strokeOpacity={0.9} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
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
              <RecordUpload
                currentDayId={currentDayId}
                setNowRecords={setNowRecords}
                currentLat={currentLat}
                currentLng={currentLng}
                setModalOpen={setModalOpen}
              ></RecordUpload>
            </div>
          ) : (
            <div>위치를 불러올 수 없어요!</div>
          )}
        </Box>
      </Modal>

      {modalRecord != null && (
        <Modal open={albumModalOpen} onClose={() => setAlbumModalOpen(false)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Card sx={{ width: 300 }}>
              <h1 style={{ marginTop: '3%', paddingLeft: '5%' }}>{modalRecord.recordName}</h1>
              {/* <CardHeader></CardHeader> */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {modalRecord.recordType == 0 ? (
                  <CardMedia
                    component="img"
                    src={modalRecord.fileUrl}
                    sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                  ></CardMedia>
                ) : (
                  <CardMedia
                    component="video"
                    controls
                    src={modalRecord.fileUrl}
                    sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                  ></CardMedia>
                )}
              </Box>
              <CardContent
                style={{
                  backgroundColor: 'lightblue',
                  margin: '4%',
                  boxShadow: '1px 1px 1px gray',
                  borderRadius: '10px',
                }}
              >
                {modalRecord.recordText}
              </CardContent>
              {/* <button>수정</button>
              <button>삭제</button> */}
            </Card>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default RecordMap;
