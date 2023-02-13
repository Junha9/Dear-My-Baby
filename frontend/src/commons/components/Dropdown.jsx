import { useEffect } from 'react';
import { apiGetBabyList } from '../api/baby';
import { useMember, useMemberReload } from '../MemberContext';

function Dropdown(props) {
  // props 함수
  const { setFamilyId, setFamilyName, setBabyName } = props;

  // Dropdown component
  const member = useMember();
  const memberReload = useMemberReload();

  // 최초에 한번 회원정보를 최신화한다
  useEffect(() => {
    memberReload();
  }, []);

  const setLocalStorageFamily = (familyId, familyName) => {
    window.localStorage.setItem('familyId', familyId);
    window.localStorage.setItem('familyName', familyName);
  };


  return (
    <div style={{display: 'inline'}}>
      {(member && member.familyIdList) 
        ? member.familyIdList.map((family) => {
          return (
            <button
              onClick={() => {
                setLocalStorageFamily(family.familyId, family.familyName);
                setFamilyId(family.familyId);
                setFamilyName(family.familyName);
                apiGetBabyList(family.familyId).then(
                  (res) => {
                    setBabyName(res.data[0].babyName);
                  });}}
            >
              {family.familyName}
            </button>
          );
        })
        : null}
    </div>
  );
}

export default Dropdown;
