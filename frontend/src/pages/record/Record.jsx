import { apiGetRecordingDayId } from '@/commons/api/plan';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './Record.css';

const Record = () => {
  const params = useParams();
  const currentDayId = params.currentDayId;
  // console.log('지금여행날', currentDayId);

  return (
    <div className="record">
      <Outlet context={{ currentDayId }}></Outlet>
    </div>
  );
};

export default Record;
