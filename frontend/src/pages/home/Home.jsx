import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Place from './Place';
import Kids from '../user/Kids';

// const travelDates = JSON.parse(localStorage.getItem('travelDates'));

// const startDate = travelDates != null ? new Date(travelDates[0].startDate) : new Date('2023-02-02');

const dummyUser = {
  userId: 'ssafy',
  userName: '김싸피',
  closestPlan: {
    planId: 1,
    planDate: new Date('2023-02-03'),
    planCount: 3,
  },
  currentPlanId: null,
};

export default function Home() {
  const [user, setUser] = useState(dummyUser);
  const closestPlan = user.closestPlan;
  const isTraveling = user.currentPlanId != null;

  // 오늘 날짜가 계획 시작 날짜와 같은지 체크 (여행 시작 중이 아니면)
  // const [isToday, checkDate] = useState(false);
  const today = new Date();
  const isToday =
    today.getFullYear() === closestPlan.planDate.getFullYear() &&
    today.getMonth() === closestPlan.planDate.getMonth() &&
    today.getDate() === closestPlan.planDate.getDate();
  const navigate = useNavigate();

  return (
    <div>
      <div className="userplan">
        {/* 여행 중일때 record 페이지로 보내주는 버튼*/}
        {isTraveling ? (
          <div>
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
          <div>
            <h2>오늘은 제주 여행 시작날입니다. 기록을 시작해보세요.</h2>
            <button
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

        {/* {console.log(isTraveling)}
        {console.log(user.currentPlanId)} */}

        <h3>계획 짜기</h3>
        <button
          onClick={() => {
            navigate('/plan');
          }}
        >
          여행 계획 추가하기
        </button>
      </div>
      <hr />
      <div className="mainFrame">
        <h3>어린이와 겨울에 가기 좋은 여행지</h3>
        <Place />
      </div>

      <div className="mainFrame">
        <h3>N세 어린이를 위한 추천 여행지</h3>
        <Place />
      </div>
    </div>
  );
}
