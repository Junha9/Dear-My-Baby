import { useState } from 'react';
import { apiCreateFamily } from '@/commons/api/family';

const FamilyForm = () => {
  const [familyName, setFamilyName] = useState('');

  const setGroupName = (e) => {
    setFamilyName(e.target.value);
  };

  // memberId 는 member api 요청 보내서 받아와야 함
  const memberId = "ssafy";
  const makeGroup = (e) => {
    e.preventDefault();
    console.log(apiCreateFamily(memberId, familyName));
  };

  return (
    <div className="family-form">
      <h2>그룹 만들기</h2>
      <form action="#">
        <input type="text" placeholder="그룹 이름" onChange={setGroupName} />
        <input type="submit" onClick={makeGroup} value="그룹 생성" />
      </form>
    </div>
  );
};

export default FamilyForm;
