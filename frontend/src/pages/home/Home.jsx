/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import path from '@/config/path';

import './Home.css';
import Dropdown from '@/commons/components/Dropdown';
import Place from './Place';
import Weather from './Weather.jsx';
import Baby from './Baby.jsx';
import Baby2 from './Baby2';
import Baby3 from './Baby3';
import Man from './Man';
import Woman from './Woman';
import { useMember, useMemberReload, useMemberAuth } from '@/commons/MemberContext';
import { apiUpdateMemberCurrentPlanId } from '@/commons/api/member';
import { apiGetBabyList } from '@/commons/api/baby';

// 접속한 유저 그룹의 plans 다 가져와야함
const dummyUser = {
  userId: 'ssafy',
  userName: '김싸피',
  closestPlan: {
    planId: 1,
    planDate: new Date(),
    planCount: 3,
  },
  currentPlan: {
    planId: 1,
    planDate: new Date(),
    planCount: 3,
  },
};

export default function Home() {
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();
  const [familyId, setFamilyId] = useState(null);
  const [familyName, setFamilyName] = useState(null);
  const [babyName, setBabyName] = useState('');
  // 최초에 한번 회원정보를 최신화한다
  useEffect(() => {
    memberReload();
  }, []);
  useEffect(() => {
    if (window.localStorage.getItem('familyId')) {
      setFamilyId(window.localStorage.getItem('familyId'));
      setFamilyName(window.localStorage.getItem('familyName'));
      apiGetBabyList(familyId).then((res) => {
        setBabyName(res.data[0].babyName);
      });
    }
  }, [familyName]);
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  // 오늘 날짜가 계획 시작 날짜와 같은지 체크 (여행 시작 중이 아니면)
  const today = new Date();
  // const isToday =
  // member.closestPlan != null &&
  // today.getFullYear() === member.closestPlan.planDate.getFullYear() &&
  // today.getMonth() === member.closestPlan.planDate.getMonth() &&
  // today.getDate() === member.closestPlan.planDate.getDate();

  return (
    <div className="main-div">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6%',
          backgroundColor: 'rgba(47, 54, 129, 0.597)',
          height: '150px',
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
            src="/assets/baby.jpg"
            style={{ height: '110px', width: '110px', borderRadius: '50%', boxShadow: '0px 2px 2px' }}
            alt="img"
          />
        </div>
      </div>
      {member != null && (
        <div className="user-plan">
          {/* 여행 중일때 record 페이지로 보내주는 버튼*/}
          {member.currentPlan != null ? (
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
          <>
            <h4 className="plan-append-text">
              <h2 style={{ display: 'inline' }}>{member.memberName}</h2>님
              <ul
                style={{ display: 'inline', padding: '0', marginLeft: '2%' }}
                onClick={() => {
                  setView(!view);
                }}
              >
                {familyName}
                {view ? '▲' : '▼'}
                {view && <Dropdown setFamilyId={setFamilyId} setBabyName={setBabyName} setFamilyName={setFamilyName} />}
              </ul>
              과(와) 함께 해보세요!
            </h4>
          </>

          {/* 오늘이 여행 일정 시작 날일때 여행 시작 버튼*/}
          {member.closestPlan != null &&
          today.getFullYear() === member.closestPlan.planDate.getFullYear() &&
          today.getMonth() === member.closestPlan.planDate.getMonth() &&
          today.getDate() === member.closestPlan.planDate.getDate() &&
          member.currentPlan == null ? (
            <div className="dday-alarm" style={{ marginBottom: '3vh' }}>
              <h4 className="dday-alarm-text">
                오늘은 제주 여행 시작날입니다.<p></p> 기록을 시작해보세요.
              </h4>
              <button
                className="dday-alarm-button"
                onClick={async () => {
                  await auth((token) => apiUpdateMemberCurrentPlanId(member.closestPlan.planId, token));
                  await memberReload();
                  navigate('record');
                }}
              >
                여행 시작
              </button>
            </div>
          ) : null}
          <div className="plan-append">
            <h3 className="plan-append-text">{babyName}과 여행할 지역을 고르셨나요?</h3>
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
        </div>
      )}

      {familyId ? (
        <div className="recommend">
          <h3>{babyName}에게 추천하는 지역별 여행지</h3>
          <Link to={path.recommend}>
            <Place />
          </Link>
        </div>
      ) : null}
      {familyId ? (
        <div className="recommend">
          <h3>{babyName}에게 추천하는 지역별 축제</h3>
          <Link to={path.recommend}>
            <Place />
          </Link>
        </div>
      ) : null}
      {familyId ? (
        <div className="recommend">
          <h3>{babyName}에게 추천하는 지역별 식당</h3>
          <Link to={path.recommend}>
            <Place />
          </Link>
        </div>
      ) : null}
      <div className="recommend">
        <h3>겨울철 아이와 함께 가볼만한 여행지</h3>
        <Link to={path.recommend}>
          <Weather />
        </Link>
      </div>
      <div className="recommend">
        <h3>유아기 아이들을 위한 추천 여행지</h3>
        <Link to={path.recommend}>
          <Baby />
        </Link>
      </div>
      <div className="recommend">
        <h3>유년기 아이들을 위한 추천 여행지</h3>
        <Link to={path.recommend}>
          <Baby2 />
        </Link>
      </div>
      <div className="recommend">
        <h3>어린이들을 위한 추천 여행지</h3>
        <Link to={path.recommend}>
          <Baby3 />
        </Link>
      </div>
      <div className="recommend">
        <h3>남자 아이들을 위한 추천 여행지</h3>
        <Link to={path.recommend}>
          <Man />
        </Link>
      </div>
      <div className="recommend">
        <h3>여자 아이들을 위한 추천 여행지</h3>
        <Link to={path.recommend}>
          <Woman />
        </Link>
      </div>
    </div>
  );
}
