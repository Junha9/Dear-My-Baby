// import { apiCreatePlan, apiUpdatePlan, apiDeletePlan, apiGetPlan, apiGetPlanList } from '@/commons/api/plan';
// import { apiCreateBaby, apiUpdateBaby, apiDeleteBaby, apiGetBaby, apiGetBabyList } from '@/commons/api/baby';
// import { apiGetFamily } from '@/commons/api/family';
import { apiGetRecordList } from '@/commons/api/record';
import { apiCreateDay } from '@/commons/api/day';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@/commons/components/Dropdown';
import './Home.css';
import Place from './Place';
import Weather from './Weather.jsx';
import Baby from './Baby.jsx';
import Baby2 from './Baby2';
import Baby3 from './Baby3';
import Man from './Man';
import Woman from './Woman';
import { width } from '@mui/system';
// 접속한 유저 그룹의 plans 다 가져와야함
const dummyUser = {
  userId: 'ssafy',
  userName: '김싸피',
  closestPlan: {
    planId: 1,
    planDate: new Date(),
    planCount: 3,
  },
  currentPlanId: null,
};

export default function Home() {
  const [user, setUser] = useState(dummyUser);
  const [selectFamily, setSelectFamily] = useState(null);
  const closestPlan = user.closestPlan;
  const isTraveling = user.currentPlanId != null;
  const [view, setView] = useState(false);

  // 오늘 날짜가 계획 시작 날짜와 같은지 체크 (여행 시작 중이 아니면)
  const today = new Date();
  const isToday =
    today.getFullYear() === closestPlan.planDate.getFullYear() &&
    today.getMonth() === closestPlan.planDate.getMonth() &&
    today.getDate() === closestPlan.planDate.getDate();
  const navigate = useNavigate();

  const [records, setRecords] = useState('');

  return (
    <div className="main-div">
      {/* //   <button
    //     onClick={() => {
    //       apiCreateDay();
    //     }}
    //   >
    //     생성
    //   </button>
    //   <button
    //     onClick={() => {
    //       apiGetRecordList(6, 13).then(({ data }) => setRecords(data));
    //     }}
    //   >
    //     기록 조회
    //   </button> */}

      {/* {records ? console.log(records) : null}
      <button
        onClick={() => {
          apiCreateDay(4);
        }}
      >
        날짜 생성
      </button> */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6%',
          // backgroundColor: 'rgba(47, 54, 129, 0.597)',
          height: '220px',
        }}
      >
        <div className="main-animation">
          <h3 style={{ fontWeight: '20', fontSize: '0.8rem', color: 'white' }}>dear my baby</h3>
          <h3 style={{ fontWeight: '100', color: 'white', fontSize: '16px', marginBottom: '15px' }}>
            당신의 아이에게 <br></br>따뜻한 추억을 선물하세요
          </h3>
        </div>
        <div className="family-photo-animation">
          <img
            src="public\assets\baby.jpg"
            style={{ height: '110px', width: '110px', borderRadius: '50%', boxShadow: '0px 2px 2px' }}
            alt="img"
          />
        </div>
      </div>
      <div className="user-plan">
        {/* 여행 중일때 record 페이지로 보내주는 버튼*/}
        {isTraveling ? (
          <div style={{ marginBottom: '3vh' }}>
            <h4>제주 여행 중</h4>
            <button
              onClick={() => {
                navigate(`/record`);
              }}
            >
              여행 기록하러가기
            </button>
          </div>
        ) : null}

        {/* 오늘이 여행 일정 시작 날일때 여행 시작 버튼*/}
        {isToday && !isTraveling ? (
          <div className="dday-alarm" style={{ marginBottom: '3vh' }}>
            <h4 className="dday-alarm-text">
              오늘은 제주 여행 시작날입니다.<p></p> 기록을 시작해보세요.
            </h4>
            <button
              className="dday-alarm-button"
              onClick={() => {
                // setTraveling(true);
                // localStorage.setItem('isTraveling', 'true');
                user.currentPlanId = closestPlan.planId;
                setUser({ ...user });
                // setUser({ ...user, [user.currentPlanId]: closestPlan.planId});
                navigate(`/record`);
              }}
            >
              여행 시작
            </button>
          </div>
        ) : null}
        {selectFamily ? (
          <div className="plan-append">
            <h3 className="plan-append-text">babyname과 여행할 지역을 고르셨나요?</h3>

            <div
              className="plus-plan"
              onClick={() => {
                navigate('/plan');
              }}
              style={{ display: 'flex', alignItems: 'center', boxSizing: 'content-box' }}
            >
              <button
                className="plan-append-text"
                onClick={() => {
                  navigate('/plan');
                }}
                style={{
                  backgroundColor: 'rgba(229, 229, 229, 1)',
                  color: 'orange',
                  border: 'none',
                  height: '30px',
                  width: '30px',
                  margin: '10px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '0.4px solid #EEEEEE',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
                  fontSize: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                  marginLeft: '30px',
                  marginBottom: '15px',
                }}
              >
                +
              </button>
              <h4>여행 계획 추가하기</h4>
            </div>
          </div>
        ) : (
          <div className="plan-append">
            <h4 className="plan-append-text">username님 가족과 함께 해보세요!</h4>

            <div className="plus-plan">
              <ul
                onClick={() => {
                  setView(!view);
                }}
              >
                가족 선택하기 {view ? ' ⌃' : ' ⌄'}
                {view && <Dropdown setSelectFamily={setSelectFamily} />}
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'content-box' }}>
              <button
                style={{ height: '30px', width: '130px', margin: '10px', marginRight: '10px', fontSize: '13px' }}
                className="dday-alarm-button2"
                onClick={() => {
                  navigate(`/user/make-group`);
                }}
              >
                가족 그룹 만들기
              </button>

              <button
                style={{ height: '30px', width: '130px', margin: '10px', marginLeft: '5px', fontSize: '13px' }}
                className="dday-alarm-button2"
                onClick={() => {
                  //
                  navigate(`/record`);
                }}
              >
                가족 그룹 들어가기
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <hr /> */}
      {selectFamily ? (
        <div className="recommend">
          <h3>babyname에게 추천하는 지역별 여행지</h3>
          <Place />
        </div>
      ) : null}
      {selectFamily ? (
        <div className="recommend">
          <h3>babyname에게 추천하는 지역별 축제</h3>
          <Place />
        </div>
      ) : null}
      {selectFamily ? (
        <div className="recommend">
          <h3>babyname에게 추천하는 지역별 식당</h3>
          <Place />
        </div>
      ) : null}
      <div className="recommend">
        <h3>겨울철 아이와 함께 가볼만한 여행지</h3>
        <Weather />
      </div>
      <div className="recommend">
        <h3>유아기 아이들을 위한 추천 여행지</h3>
        <Baby />
      </div>
      <div className="recommend">
        <h3>유년기 아이들을 위한 추천 여행지</h3>
        <Baby2 />
      </div>
      <div className="recommend">
        <h3>어린이들을 위한 추천 여행지</h3>
        <Baby3 />
      </div>
      <div className="recommend">
        <h3>남자 아이들을 위한 추천 여행지</h3>
        <Man />
      </div>
      <div className="recommend">
        <h3>여자 아이들을 위한 추천 여행지</h3>
        <Woman />
      </div>
    </div>
  );
}
