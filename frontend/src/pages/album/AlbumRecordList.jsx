import { setState, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { apiGetPlan } from '@/commons/api/plan';
import { apiGetDayRecord } from '@/commons/api/record';

import AlbumRecordItem from './AlbumRecordItem';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MapIcon from '@mui/icons-material/Map';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';

export default function AlbumRecord() {
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

  return (
    <>
      {/* 여행 기록 제목  */}
      {plan != null ? (
        <>
          <Box className="record-name-box" p={2}>
            <Typography className="record-name" variant="h5" style={{ fontSize: '30px' }}>
              <strong>{plan.planName}</strong>
            </Typography>

            <Box className="date-map-link" sx={{ display: 'flex', alignContent: 'center' }}>
              <Typography variant="h6" sx={{ color: 'gray', fontSize: '15px' }}>
                {plan.startDate} ~ {plan.endDate}
              </Typography>
              <IconButton component={Link} to="../map" edge="end" aria-label="to-map">
                <MapIcon />
              </IconButton>
            </Box>
          </Box>
          <div className="record-list-box">
            <div className="record-list-text">
              <p>
                <strong>여행을 추억해보세요</strong>
              </p>
            </div>
            <Box sx={{ p: 3 }}>
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
            {dayIndex >= 0 && dayIndex < dayRecordList.length && dayRecordList[dayIndex].length > 0 ? (
              dayRecordList[dayIndex].map((record) => (
                <AlbumRecordItem key={record.recordId} record={record}></AlbumRecordItem>
              ))
            ) : (
              <div>기록이 없음</div>
            )}
          </div>
        </>
      ) : (
        <div>No plan</div>
      )}
    </>
  );
}
