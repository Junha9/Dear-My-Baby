import { FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiCreateBaby } from '@/commons/api/baby';
import './KidsInformation.css';

const KidsBaseInfo = () => {
  let babyData = {
    familyId: window.localStorage.getItem('familyId'),
    favoriteSpot: [],
    favoriteFood: [],
    babyName: '',
    babyAge: '',
  };

  const [kidsHowMany, setKidsHowMany] = useState();
  const [kidsName, setKidsName] = useState();
  const [kidsHowOld, setKidsHowOld] = useState();
  const [kidsGender, setKidsGender] = useState();

  const navigate = useNavigate();

  const changeHowMany = (e) => {
    // document.getEventListener();
    console.log(e);
    const val = e.target.value;
    setKidsHowMany(val);
  };

  const changeHowOld = (e) => {
    const year = e.target.value;
    console.log(year, 'jjj');
    setKidsHowOld(year);
  };

  const changeGender = (e) => {
    const gen = e.target.value;
    setKidsGender(gen);
  };

  const sendKidInfo = async () => {
    babyData.babyAge = kidsHowOld;
    babyData.babyName = kidsName;
    await apiCreateBaby(babyData).then((res) => {
      console.log(res);
      navigate(`./kids-favor`);
    });
  };

  const check = () => {
    alert(babyData.name);
  };

  return (
    <div className="kid-base-frame">
      <h2>자녀의 기본 정보를 입력해주세요</h2>
      <div className="kid-base-info-frame">
        <div className="kid-info-question">
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
        </div>
        <div className="kid-info-question">
          <h3>아이의 별명을 입력해주세요</h3>
          <input className="kid-info-name-input" type="text" onChange={(e) => setKidsName(e.target.value)} />
        </div>
        <div className="kid-info-question">
          <h3>자녀(들)은 몇 살 인가요? </h3>
          <FormControl>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel
                value={0}
                control={<Radio defaultChecked />}
                label="0 - 3 세"
                onClick={(e) => changeHowOld(e)}
              />
              <FormControlLabel value={1} control={<Radio />} label="4 - 7세" onClick={(e) => changeHowOld(e)} />
              <FormControlLabel value={2} control={<Radio />} label="8 - 10세" onClick={(e) => changeHowOld(e)} />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="kid-info-question kid-info-question-last">
          <h3>성별은 무엇인가요?</h3>
          <FormControl>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="male" control={<Radio />} label="남자" onClick={(e) => changeGender(e)} />
              <FormControlLabel value="female" control={<Radio />} label="여자" onClick={(e) => changeGender(e)} />
              <FormControlLabel value="both" control={<Radio />} label="둘 다" onClick={(e) => changeGender(e)} />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="kid-info-submit">
          <button className="kid-info-submit-btn" onClick={sendKidInfo}>
            submit
          </button>
        </div>
        {/* <button onClick={() => check()}>check</button> */}
      </div>
    </div>
  );
};

export default KidsBaseInfo;
