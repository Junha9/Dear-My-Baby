// - 자녀 유(로 가정) 무
// - 자녀 몇명인지
//     - 자녀들 전체 고려해서 선택 하게 하기
// - 연령대
//     - 0~3
//     - 4~ 7
//     - 8~10
//     - 11세 이상
// - 성별 (남, 녀, 둘다)
import { FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

const KidsBaseInfo = () => {
  const [kidsBaseInfo, setKidsBaseInfo] = useState([]);
  const [kidsHowMany, setKidsHowMany] = useState();
  const [kidsHowOld, setKidsHowOld] = useState();
  const [kidsGender, setKidsGender] = useState();

  const changeHowMany = (e) => {
    // document.getEventListener();
    console.log(e);
    const val = e.target.value;
    setKidsHowMany(val);
  };

  const changeHowOld = (e) => {
    const year = e.target.value;
    console.log(year);
    setKidsHowOld(kidsHowOld + year);
  };

  const changeGender = (e) => {
    const gen = e.target.value;
    setKidsGender(gen);
  };
  const sendKidInfo = () => {
    console.log(kidsHowMany, kidsHowOld, kidsGender);
    setKidsBaseInfo([kidsHowMany, kidsHowOld, kidsGender]);
    console.log(kidsBaseInfo);
  };

  return (
    <div className="kid-base-frame">
      <h3>자녀가 몇 명인가요?</h3>
      <FormControl>
        {/* <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel> */}
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="0" control={<Radio />} label="없음" onClick={(e) => changeHowMany(e)} />
          <FormControlLabel value="1" control={<Radio />} label=" 1명" onClick={(e) => changeHowMany(e)} />
          <FormControlLabel value="2" control={<Radio />} label=" 2명" onClick={(e) => changeHowMany(e)} />
          <FormControlLabel value="3" control={<Radio />} label=" 3명 이상" onClick={(e) => changeHowMany(e)} />
        </RadioGroup>
      </FormControl>
      <h3>자녀(들)은 몇 살 인가요? (다중선택)</h3>
      <FormGroup>
        <FormControlLabel
          value="0-3,"
          control={<Checkbox defaultChecked />}
          label="0 - 3 세"
          onClick={(e) => changeHowOld(e)}
        />
        <FormControlLabel value="4-6," control={<Checkbox />} label="4 - 7세" onClick={(e) => changeHowOld(e)} />
        <FormControlLabel value="7-10" control={<Checkbox />} label="8 - 10세" onClick={(e) => changeHowOld(e)} />
      </FormGroup>

      <h3>성별을 무엇인가요?</h3>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="male" control={<Radio />} label="남자" onClick={(e) => changeGender(e)} />
          <FormControlLabel value="female" control={<Radio />} label="여자" onClick={(e) => changeGender(e)} />
          <FormControlLabel value="both" control={<Radio />} label="둘 다" onClick={(e) => changeGender(e)} />
        </RadioGroup>
      </FormControl>
      <button onClick={() => sendKidInfo()}> submit</button>
    </div>
  );
};

export default KidsBaseInfo;
