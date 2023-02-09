import { useState } from 'react';
import { apiGetFamily, apiInviteFamily } from '@/commons/api/family';

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
        onClick={() => {
          // apiInviteFamily(ss, 0);
        }}
      >
        가족 초대
      </button>
      {!!familyInfo && JSON.stringify(familyInfo)}
      {!!familyInfo && familyInvitationCode}
    </div>
  );
}
