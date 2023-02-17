/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import path from '@/config/path';
import { useState, useEffect } from 'react';
import { apiCreatePlan } from '@/commons/api/plan';
// import './SelectPlace.css';

export default function SelectPlace(props) {
  const [familyId, setFamilyId] = useState(null);
  const [destination, setDestination] = useState([
    {
      name: '임의의 장소',
      lat: 38,
      lng: 128,
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const readValue = localStorage.getItem('familyId');
    if (readValue == null) {
      alert('가족 그룹 선택해주세요');
    } else {
      setFamilyId(readValue);
    }
  }, []);

  // 첫 검색어 중심 좌표 데이터
  const tripDate = props.planDate;

  const regionRows = [];
  for (let i = 0; i < regions1.length; i++) {
    regionRows.push(
      <tr key={i}>
        <td>
          <button className="select-place-button" onClick={() => setDestination(regions1[i])}>
            {regions1[i].name}
          </button>
        </td>
        <td>
          <button className="select-place-button" onClick={() => setDestination(regions2[i])}>
            {regions2[i].name}
          </button>
        </td>
      </tr>,
    );
  }

  const createPlan = async () => {
    const data = {
      familyId: window.localStorage.getItem('familyId'),
      planName: `${destination.name} 여행`,
      planDestination: destination.name,
      startDate: tripDate[0].startDate,
      endDate: tripDate[0].endDate,
      planLatitude: destination.lat,
      planLongitude: destination.lng,
    };
    const response = await apiCreatePlan(data);
    const plan = response.data;
    navigate(`/plan/${plan.planId}/find-city`);
  };

  return (
    <div className="plan-cityframe" style={{ padding: '3vh', textAlign: 'center' }}>
      <h2>여행하실 지역을 선택해주세요</h2>
      <table className="city__table">
        <tbody>{regionRows}</tbody>
      </table>
      {/* <button
          onClick={() => {
            createPlan();
            //   alert(
              //   `저장하신 계획 일정: ${trip[0].startDate.toDateString()}, 지역 : ${trip[0].destination}이 맞나요?`
              // )
            }}
            >
            일정 저장하기
          </button> */}
      <button
        onClick={createPlan}
        // state={{ keyword: initLoc.keyword, lat: initLoc.lat, lng: initLoc.lng }}
        style={{ marginTop: '10%', textDecoration: 'none', fontSize: '1rem', padding: '4%' }}
      >
        일정 저장하기
      </button>
    </div>
  );
}

const regions1 = [
  {
    name: '가평 양평',
    lat: 37.794925,
    lng: 127.43003,
  },
  {
    name: '경주',
    lat: 35.84406257,
    lng: 129.3122708,
  },
  {
    name: '여수',
    lat: 34.75184929602594,
    lng: 127.74680695157882,
  },
  {
    name: '전주',
    lat: 35.83400122960501,
    lng: 127.11543703651175,
  },
];

const regions2 = [
  {
    name: '강릉 속초',
    lat: 37.82170338925371,
    lng: 128.81883505712997,
  },
  {
    name: '부산',
    lat: 35.16452868,
    lng: 129.126593,
  },
  {
    name: '인천',
    lat: 37.49330981561231,
    lng: 126.6857071575943,
  },
  {
    name: '제주',
    lat: 33.35648516254793,
    lng: 126.46454584465897,
  },
];
