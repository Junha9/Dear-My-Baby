import { Link, useNavigate } from 'react-router-dom';
import path from '@/config/path';
import { useEffect, useState } from 'react';
import { apiCreatePlan } from '@/commons/api/plan';
import { useMemberReload } from '@/commons/MemberContext';
// import './SelectPlace.css';

const SelectPlace = (props) => {
  const navigate = useNavigate();
  const memberReload = useMemberReload();

  // 첫 검색어 중심 좌표 데이터
  const tripDate = props.planDate;
  const [destination, setDestination] = useState('');
  const [trip, setTrip] = useState([...tripDate]);
  const [initLoc, setInitLoc] = useState([
    {
      keyword: '',
      lat: 38,
      lng: 128,
    },
  ]);
  // e.target.innerHTML
  const setPlanInfo = (e, test) => {
    console.log(e, test);
    setDestination(e);
    setInitLoc(test);
  };

  const createPlan = () => {
    setTrip([...tripDate, (trip[0].destination = destination)]);
    const data = {
      familyId: window.localStorage.getItem('familyId'),
      planName: `${destination} 여행`,
      planDestination: destination,
      startDate: tripDate[0].startDate,
      endDate: tripDate[0].endDate,
    };
    apiCreatePlan(data).then(() => {
      memberReload();
    });
  };

  return (
    <div className="plan-cityframe" style={{ padding: '3vh', textAlign: 'center' }}>
      <h3>여행하실 지역을 선택해주세요</h3>
      <table className="city__table">
        <tr>
          <td>
            <button
              className="select-place-button"
              onClick={(e) => setPlanInfo(e.target.innerHTML, { keyword: '가평', lat: 37.794925, lng: 127.43003 })}
            >
              가평 양평
            </button>
          </td>
          <td>
            <button
              className="select-place-button"
              onClick={(e) =>
                setPlanInfo(e.target.innerHTML, { keyword: '강릉', lat: 37.82170338925371, lng: 128.81883505712997 })
              }
            >
              강릉 속초
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="select-place-button"
              onClick={(e) => setPlanInfo(e.target.innerHTML, { keyword: '경주', lat: 35.84406257, lng: 129.3122708 })}
            >
              경주
            </button>
          </td>
          <td>
            <button
              className="select-place-button"
              onClick={(e) => setPlanInfo(e.target.innerHTML, { keyword: '부산', lat: 35.16452868, lng: 129.126593 })}
            >
              부산
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="select-place-button"
              onClick={(e) =>
                setPlanInfo(e.target.innerHTML, { keyword: '여수', lat: 37.566689049201976, lng: 126.9786296593204 })
              }
            >
              여수
            </button>
          </td>
          <td>
            <button
              className="select-place-button"
              onClick={(e) =>
                setPlanInfo(e.target.innerHTML, { keyword: '인천', lat: 37.49330981561231, lng: 126.6857071575943 })
              }
            >
              인천
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="select-place-button"
              onClick={(e) =>
                setPlanInfo(e.target.innerHTML, { keyword: '전주', lat: 35.83400122960501, lng: 127.11543703651175 })
              }
            >
              전주
            </button>
          </td>
          <td>
            <button
              className="select-place-button"
              onClick={(e) =>
                setPlanInfo(e.target.innerHTML, { keyword: '제주', lat: 33.35648516254793, lng: 126.46454584465897 })
              }
            >
              제주
            </button>
          </td>
        </tr>
      </table>
      <button style={{ backgroundColor: 'white', color: 'black', textDecoration: 'none' }}>
        <button
          onClick={
            createPlan
            //   alert(
            //   `저장하신 계획 일정: ${trip[0].startDate.toDateString()}, 지역 : ${trip[0].destination}이 맞나요?`
            // )
          }
        >
          일정 저장하기
        </button>
        <div></div>
        <Link
          to={path.planFindCity}
          onClick={() => {
            // prop 받은 날짜 정보, destination 저장하는 함수
            setTrip([...tripDate, (trip[0].destination = destination)]);
            console.log(trip);
            // navigate('/plan/find-city');
          }}
          state={{ keyword: initLoc.keyword, lat: initLoc.lat, lng: initLoc.lng }}
          style={{ textDecoration: 'none' }}
        ></Link>
      </button>
    </div>
  );
};
export default SelectPlace;
