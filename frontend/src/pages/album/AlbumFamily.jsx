import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMember } from '@/commons/MemberContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function AlbumFamily() {
  const member = useMember();
  const [familyId, setFamilyId] = useState('');
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (familyId != '') {
      navigate(`${familyId}`);
    } else {
      alert('그룹을 선택해주세요!');
    }
  }, [familyId]);

  return (
    <>
      <Box sx={{ backgroundColor: 'white', p: 3 }}>
        {member != null ? (
          <>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                그룹 선택
              </InputLabel>
              <NativeSelect value={familyId} onChange={(event) => setFamilyId(event.target.value)}>
                <option value=""></option>
                {member.familyIdList.map((family) => (
                  <option key={family.familyId} value={family.familyId} selected={false}>
                    {family.familyName}
                  </option>
                ))}
                {/* <option value={10}>테스트</option> */}
              </NativeSelect>
            </FormControl>
            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined" onClick={handleClick}>
                계획 목록으로 이동
              </Button>
            </Box>
          </>
        ) : (
          <div>Not Logged in</div>
        )}
      </Box>
    </>
  );
}
