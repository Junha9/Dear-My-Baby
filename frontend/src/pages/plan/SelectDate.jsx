import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SelectPlace from './SelectPlace';
import { apiGetMemberFamilyList } from '@/commons/api/member';

const SelectDate = () => {
  const navigate = useNavigate();
  // const [memberFamily, setmemberFamily] = useState('이 없습니다');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      destination: '',
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

  // const getGroupData = () => {
  //   apiGetMemberFamilyList(1).then(({ data }) => {
  //     console.log(data);
  //     setmemberFamily(data[0].familyName);
  //     return data;
  //   });
  // };

  return (
    <div className="plan-frame" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <div className="planning-div" style={{ backgroundColor: 'pink' }}>
         <h2>함께 여행할 그룹</h2>
        <button onClick={getGroupData} style={{ marginBottom: '10px' }}>
          그룹 데이터 띄우기
        </button>
        {memberFamily}
      </div> */}

      {console.log(date)}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: '5%' }}>여행 일정 등록</h3>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
        {/* <button
          onClick={() => {
            navigate('/plan/find-city');
            setDate([...date]);
            console.log(date);
            alert('저장 되었습니다.', date)
          }}
        >
          날짜 저장하기
        </button> */}
        <SelectPlace planDate={date} />
      </div>
      {/* <form onSubmit={checkTravelDates}>
        <button>날짜 체크하기</button>
      </form> */}
    </div>
  );
};
export default SelectDate;
