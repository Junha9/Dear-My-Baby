import { useState } from 'react';
import { apiCreateFamily } from '@/commons/api/family';
import { useNavigate } from 'react-router-dom';

const FamilyForm = () => {
  const [familyName, setFamilyName] = useState('');
  const navigate = useNavigate();

  const setGroupName = (e) => {
    setFamilyName(e.target.value);
  };

  // memberId 는 member api 요청 보내서 받아와야 함
  const memberId = 'hoguangel';
  const makeGroup = (e) => {
    e.preventDefault();
    // console.log(apiCreateFamily(memberId, familyName));
    navigate('../../plan/select-date');
  };

  return (
    <div className="family-form" style={{ height: '100vh', width: '100vw' }}>
      <h2>그룹 만들기</h2>
      <form action="#">
        <input type="text" placeholder="그룹 이름" onChange={setGroupName} />
        <input type="submit" onClick={makeGroup} value="그룹 생성" />
      </form>
    </div>
  );
};

export default FamilyForm;
