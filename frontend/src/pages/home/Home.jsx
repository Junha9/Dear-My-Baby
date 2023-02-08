import { apiCreatePlan } from '@/commons/api/plan';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Place from './Place';

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
  const closestPlan = user.closestPlan;
  const isTraveling = user.currentPlanId != null;

  // 오늘 날짜가 계획 시작 날짜와 같은지 체크 (여행 시작 중이 아니면)
  const today = new Date();
  const isToday =
    today.getFullYear() === closestPlan.planDate.getFullYear() &&
    today.getMonth() === closestPlan.planDate.getMonth() &&
    today.getDate() === closestPlan.planDate.getDate();
  const navigate = useNavigate();

  return (
    <div className="main-div">
      {/* <button onClick={()=>{apiCreatePlan(1)}}>계획 생성</button> */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6%',
          // backgroundColor: 'rgba(47, 54, 129, 0.597)',
          height: '280px',
        }}
      >
        <div>
          <h3 style={{ fontWeight: '20', fontSize: '0.8rem', color: 'white' }}>dear my baby</h3>
          <h2 style={{ fontWeight: '100', color: 'white' }}>당신의 아이에게 따뜻한 추억을 선물하세요</h2>
        </div>
        <img
          src="/assets/family.jpeg"
          style={{ height: '130px', width: '130px', borderRadius: '50%', boxShadow: '0px 2px 2px 3' }}
        ></img>
      </div>
      <div className="user-plan">
        {/* 여행 중일때 record 페이지로 보내주는 버튼*/}
        {isTraveling ? (
          <div style={{ marginBottom: '3vh' }}>
            <h2>제주 여행 중</h2>
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
          <div className='dday-alarm' style={{ marginBottom: '3vh' }}>
            <h2 className='dday-alarm-text'>오늘은 제주 여행 시작날입니다. 기록을 시작해보세요.</h2>
            <button className='dday-alarm-button'
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

        <div className='plan-append'>
          <h3 className='plan-append-text'>...님 여행할 지역을 고르셨나요?</h3>

          <div
            className="plus-plan"
            onClick={() => {
              navigate('/plan');
            }}
            style={{ display: 'flex', alignItems: 'center', boxSizing: 'content-box' }}
          >
            <button className='plan-append-text'
              onClick={() => {
                navigate('/plan');
              }}
              style={{
                backgroundColor: 'rgba(229, 229, 229, 1)',
                color: 'orange',
                border: 'none',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1%',
              }}
            >
              +
            </button>
            <h4>여행 계획 추가하기</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="recommend">
        <h3>어린이와 겨울에 가기 좋은 여행지</h3>
        <Place />
      </div>
      <div className="recommend">
        <h3>N세 어린이를 위한 추천 여행지</h3>
        <Place />
      </div>
    </div>
  );
}
