import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { apiGetPlan } from '@/commons/api/plan';
import { apiGetDayRecord } from '@/commons/api/record';

import { Map } from 'react-kakao-maps-sdk';
import { Modal, Box } from '@mui/material';
import AlbumMapCluster from './AlbumMapCluster';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import NativeSelect from '@mui/material/NativeSelect';

export default function AlbumMap() {
  const { planId } = useParams();
  const [plan, setPlan] = useState(null);
  const [dayRecordList, setDayRecordList] = useState([]);
  const [dayIndex, setDayIndex] = useState(0);

  useEffect(() => {
    apiGetPlan(planId).then(({ data }) => setPlan(data));
  }, [planId]);

  useEffect(() => {
    const loadDayRecordList = async () => {
      const newDayRecordList = [];
      for (const day of plan.days) {
        const response = await apiGetDayRecord(day.dayId);
        const recordList = response.data;
        newDayRecordList.push(recordList);
      }
      setDayRecordList(newDayRecordList);
    };
    loadDayRecordList();
  }, [plan]);

  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  function handleRecordIndex(index) {
    setActiveStep(index);
    setModalOpen(true);
  }

  return (
    <>
      {plan != null && dayRecordList.length > 0 ? (
        <>
          <Box sx={{ background: 'white', p: 3 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                날짜 선택
              </InputLabel>
              <NativeSelect value={dayIndex} onChange={(event) => setDayIndex(event.target.value)}>
                {plan.days.map((day, index) => (
                  <option key={index} value={index} selected={false}>
                    {index + 1}일차
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Box>

          <Map
            center={{ lat: plan.planLatitude, lng: plan.planLongitude }}
            style={{ width: '100%', height: '90vh' }}
            draggable={true}
          >
            {dayRecordList.length > 0 && (
              <AlbumMapCluster
                records={dayRecordList[dayIndex]}
                handleRecordIndex={handleRecordIndex}
              ></AlbumMapCluster>
            )}
          </Map>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {activeStep < dayRecordList[dayIndex].length ? (
                <Card sx={{ width: 350 }} style={{ borderRadius: '10%' }}>
                  <CardHeader title={`${dayIndex + 1}일차 기록`} style={{ fontFamily: 'sans-serif' }}></CardHeader>
                  <h2 style={{ marginTop: '3%', paddingLeft: '5%' }}>
                    {dayRecordList[dayIndex][activeStep].recordName}
                  </h2>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>
                      <KeyboardArrowLeft></KeyboardArrowLeft>
                    </Button>
                    {dayRecordList[dayIndex][activeStep].recordType == 0 ? (
                      <CardMedia
                        component="img"
                        src={dayRecordList[dayIndex][activeStep].fileUrl}
                        sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                      ></CardMedia>
                    ) : (
                      <CardMedia
                        component="video"
                        controls
                        src={dayRecordList[dayIndex][activeStep].fileUrl}
                        sx={{ width: '70%', height: '200px', objectFit: 'contain' }}
                      ></CardMedia>
                    )}

                    <Button
                      disabled={activeStep === dayRecordList[dayIndex].length - 1}
                      onClick={() => setActiveStep(activeStep + 1)}
                    >
                      <KeyboardArrowRight></KeyboardArrowRight>
                    </Button>
                  </Box>
                  <CardContent
                    style={{
                      margin: '4%',
                      boxShadow: '1px 1px 1px gray',
                      borderRadius: '10px',
                    }}
                  >
                    {dayRecordList[dayIndex][activeStep].recordText}
                  </CardContent>
                </Card>
              ) : (
                <div>No Content</div>
              )}
            </Box>
          </Modal>
        </>
      ) : (
        <div>No Plan</div>
      )}
    </>
  );
}
