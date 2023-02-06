import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SelectDate = () => {
  const navigate = useNavigate();
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
    e.preventDefault();
    localStorage.setItem('travelDates', JSON.stringify(state));
  }

  const travelDates = JSON.parse(localStorage.getItem('travelDates'));
  // const navigate = useNavigate();

  // function checkTravelDates(e) {
  //   e.preventDefault();
  //   if (travelDates != null && isSameDate(new Date(), new Date(travelDates[0].startDate))) {
  //     console.log('오늘은 여행날');
  //   }
  // }

  return (
    <div style={{padding: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>여행하실 날짜를 선택해주세요</h2>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <form onSubmit={saveTravelDates}>
        <button
          onClick={() => {
            navigate('../select-place');
            // 날짜 저장
          }}
        >
          날짜 저장하기
        </button>
      </form>
      {/* <form onSubmit={checkTravelDates}>
        <button>날짜 체크하기</button>
      </form> */}
    </div>
  );
};
export default SelectDate;
