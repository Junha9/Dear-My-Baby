import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SelectPlace from './SelectPlace';
import { apiGetMemberFamilys } from '@/commons/api/member';

const SelectDate = () => {
  const navigate = useNavigate();
  const [memberFamily, setmemberFamily] = useState('이 없습니다');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // D-day - 이용자가 설정한 출발일과 오늘이 같은 날짜인지 확인
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  function saveTravelDates(e) {
    localStorage.setItem('travelDates', JSON.stringify(state));
  }

  const getGroupData = () => {
    apiGetMemberFamilys(1).then(({ data }) => {
      console.log(data);
      setmemberFamily(data[0].familyName);
      return data;
    });
  };

  return (
    <div
      className="plan-frame"
      style={{ padding: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div className="planning-div" style={{ backgroundColor: 'pink' }}>
        <h2>함께 여행할 그룹</h2>
        <button onClick={getGroupData} style={{ marginBottom: '10px' }}>
          그룹 데이터 띄우기
        </button>
        {memberFamily}
      </div>

      <div
        className="planning-div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5%',
          boxShadow: '2px 2px 15px rgba(217, 217, 217, 1)',
          borderRadius: '5px',
        }}
      >
        <h2 style={{ marginBottom: '5%' }}>여행하실 날짜를 선택해주세요</h2>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        <button
          onClick={() => {
            navigate('/plan/find-city');
            saveTravelDates();
          }}
        >
          날짜 저장하기
        </button>
      </div>
      {/* <form onSubmit={checkTravelDates}>
        <button>날짜 체크하기</button>
      </form> */}
      <SelectPlace />
    </div>
  );
};
export default SelectDate;
