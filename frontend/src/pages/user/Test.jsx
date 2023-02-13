import { useState } from 'react';
import { apiGetFamily, apiInviteFamily } from '@/commons/api/family';
import { useMember, useMemberAuth, useMemberReload } from '@/commons/MemberContext';
import { apiLoginMember } from '@/commons/api/member';

export default function Test() {
  const [familyInfo, setFamilyInfo] = useState();
  const [familyInvitationCode, setFamilyInvitationCode] = useState(0);
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          apiGetFamily(2).then(({ data }) => {
            setFamilyInfo(data);
            setFamilyInvitationCode(data.invitation);
          });
        }}
      >
        Panic Button
      </button>
      <button
        onClick={function () {
          apiLoginMember('kmh7777', 'gkdlgkdl123!').then((res)=>
          {console.log(res)}
          ).catch(e => console.log(e))
        }}
      >
        멤버 테스트
      </button>
      {!!familyInfo && JSON.stringify(familyInfo)}
      {!!familyInfo && familyInvitationCode}
    </div>
  );
}
