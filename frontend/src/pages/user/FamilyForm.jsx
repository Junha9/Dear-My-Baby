import { useState, useEffect } from 'react';
import { apiCreateFamily } from '@/commons/api/family';
import { useNavigate } from 'react-router-dom';
import { useMember, useMemberReload, useMemberAuth } from '@/commons/MemberContext';
import { apiGetMember, apiUpdateMemberCurrentPlanId, apiGetMemberFamilyList } from '@/commons/api/member';
import './Userinfo.css';

const FamilyForm = () => {
  const [familyName, setFamilyName] = useState('');
  const [userFamilyList, setUserFamilyList] = useState('');

  const navigate = useNavigate();

  const setGroupName = (e) => {
    setFamilyName(e.target.value);
  };

  // memberId 는 member api 요청 보내서 받아와야 함
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();

  // 최초에 한번 회원정보를 최신화
  useEffect(() => {
    memberReload();
  }, []);

  // 회원이 가진 그룹 조회
  // useEffect(async () => {
  //   await auth((token) => {apiGetMemberFamilyList(member.memberId, token).then((data) => setUserFamilyList(data))})})

  // const memberId = 'hoguangel';
  const makeGroup = async () => {
    if (member != null) {
      await apiCreateFamily(member.memberId, familyName);
      await memberReload();
      alert(`${familyName} 그룹이 생성 되었습니다.`);
      navigate(`/`);
    }
  };

  return (
    <div className="group__create" style={{ padding: '10%' }}>
      <h2>그룹 만들기</h2>
      <div action="#">
        <input type="text" placeholder="그룹 이름" onChange={setGroupName} />
        <button onClick={makeGroup}>그룹 생성</button>
      </div>

      {/* <h2>member.memberName 님의 그룹</h2>
      { async () => {
        await auth((token) => {apiGetMemberFamilyList(member.memberId, token).then((data) => setUserFamilyList(data))})}}   
      { userFamilyList.familyName } */}
    </div>
  );
};

export default FamilyForm;
