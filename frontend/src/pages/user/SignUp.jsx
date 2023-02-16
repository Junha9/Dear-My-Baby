import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Canvas from '@/commons/components/Canvas';
import { apiCreateMember, apiCheckMember } from '@/commons/api/member';

export default function SignUp() {
  const [signUpId, setSignUpId] = useState('');
  const [password, setPassword] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputFile, setInputFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [warnings, setWarnings] = useState({});

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setInputFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (warnings.signUpId || warnings.name || warnings.password || warnings.pwdCheck || warnings.email) {
      alert('입력한 정보를 확인해주세요!');
      return;
    }
    try {
      await apiCreateMember(
        {
          memberName: name,
          memberEmail: email,
          memberPassword: password,
          memberId: signUpId,
        },
        imageFile,
      );
      navigate('/user/login');
    } catch (error) {
      alert('회원가입에 실패했습니다');
    }
  };

  const onChangeId = async (e) => {
    const currentId = e.target.value;
    setSignUpId(currentId);
    const idRegExp = /^[a-zA-z0-9]{5,12}$/;

    if (!idRegExp.test(currentId)) {
      setWarnings({ signUpId: '5-12사이 대소문자 또는 숫자만 입력해 주세요!' });
    } else if (!(await apiCheckMember(currentId)).data) {
      setWarnings({ signUpId: '아이디가 중복됩니다' });
    } else {
      setWarnings({});
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setWarnings({ name: '닉네임은 2글자 이상 5글자 이하로 입력해주세요!' });
    } else {
      setWarnings({});
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setWarnings({ password: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' });
    } else {
      setWarnings({});
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPwdCheck(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setWarnings({ pwdCheck: '떼잉~ 비밀번호가 똑같지 않아요!' });
    } else {
      setWarnings({});
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setWarnings({ email: '이메일의 형식이 올바르지 않습니다!' });
    } else {
      setWarnings({});
    }
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <button onClick={() => console.log(inputFile)}>Panic Button</button>
        <button onClick={() => console.log(imageFile)}>Panic Button</button>
        <button onClick={() => console.log(imageDataUrl)}>Panic Button</button> */}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Canvas hidden inputFile={inputFile} setImageFile={setImageFile} setImageDataUrl={setImageDataUrl}></Canvas>
          <Grid container justifyContent="center" sx={{ p: 3 }}>
            <Button component="label">
              <Avatar sx={{ width: 200, height: 200 }}>
                {imageDataUrl != null ? (
                  <img src={imageDataUrl} alt="member"></img>
                ) : (
                  <ImageSearchIcon sx={{ width: '50%', height: '50%' }} />
                )}
              </Avatar>
              <input type="file" accept="image/png, image/jpeg" hidden onChange={handleImageChange} />
            </Button>
          </Grid>
          <TextField
            error={warnings.name != null}
            helperText={warnings.name}
            margin="normal"
            required
            fullWidth
            label="이름"
            type="text"
            value={name}
            onChange={onChangeName}
          />
          <TextField
            error={warnings.signUpId != null}
            helperText={warnings.signUpId}
            margin="normal"
            required
            fullWidth
            label="아이디"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={signUpId}
            onChange={onChangeId}
          />
          <TextField
            error={warnings.password != null}
            helperText={warnings.password}
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <TextField
            error={warnings.pwdCheck != null}
            helperText={warnings.pwdCheck}
            margin="normal"
            required
            fullWidth
            label="비밀번호 확인"
            type="password"
            value={pwdCheck}
            onChange={onChangePasswordConfirm}
          />

          <TextField
            error={warnings.email != null}
            helperText={warnings.email}
            margin="normal"
            required
            fullWidth
            label="이메일"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="유용한 정보 이메일로 받기" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontFamily: 'inherit' }}>
            회원가입
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="../login">이미 회원이신가요? 로그인하기</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

// const Temp = () => {
//   // 라우팅
//   const navigate = useNavigate();

//   // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const [email, setEmail] = useState('');

//   // 오류메세지 상태 저장
//   const [idMessage, setIdMessage] = useState('');
//   const [nameMessage, setNameMessage] = useState('');
//   const [passwordMessage, setPasswordMessage] = useState('');
//   const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
//   const [emailMessage, setEmailMessage] = useState('');

//   // 유효성 검사
//   const [isId, setIsId] = useState(false);
//   const [isname, setIsName] = useState(false);
//   const [isPassword, setIsPassword] = useState(false);
//   const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
//   const [isEmail, setIsEmail] = useState(false);

//   const [userInfo, setUserInfo] = useState({
//     userId: '',
//     userName: '',
//     userPassword: '',
//     userEmail: '',
//   });
//   const { userId, userName, userPassword, userEmail } = userInfo;

//   const onChangeId = (e) => {
//     const currentId = e.target.value;
//     setId(currentId);
//     const idRegExp = /^[a-zA-z0-9]{4,12}$/;

//     if (!idRegExp.test(currentId)) {
//       setIdMessage('4-12사이 대소문자 또는 숫자만 입력해 주세요!');
//       setIsId(false);
//     } else {
//       setIdMessage('사용가능한 아이디 입니다.');
//       setIsId(true);
//     }
//   };

//   const onChangeName = (e) => {
//     const currentName = e.target.value;
//     setName(currentName);

//     if (currentName.length < 2 || currentName.length > 5) {
//       setNameMessage('닉네임은 2글자 이상 5글자 이하로 입력해주세요!');
//       setIsName(false);
//     } else {
//       setNameMessage('사용가능한 닉네임 입니다.');
//       setIsName(true);
//     }
//   };

//   const onChangePassword = (e) => {
//     const currentPassword = e.target.value;
//     setPassword(currentPassword);
//     const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
//     if (!passwordRegExp.test(currentPassword)) {
//       setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
//       setIsPassword(false);
//     } else {
//       setPasswordMessage('안전한 비밀번호 입니다.');
//       setIsPassword(true);
//     }
//   };
//   const onChangePasswordConfirm = (e) => {
//     const currentPasswordConfirm = e.target.value;
//     setPasswordConfirm(currentPasswordConfirm);
//     if (password !== currentPasswordConfirm) {
//       setPasswordConfirmMessage('떼잉~ 비밀번호가 똑같지 않아요!');
//       setIsPasswordConfirm(false);
//     } else {
//       setPasswordConfirmMessage('똑같은 비밀번호를 입력했습니다.');
//       setIsPasswordConfirm(true);
//     }
//   };
//   const onChangeEmail = (e) => {
//     const currentEmail = e.target.value;
//     setEmail(currentEmail);
//     const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

//     if (!emailRegExp.test(currentEmail)) {
//       setEmailMessage('이메일의 형식이 올바르지 않습니다!');
//       setIsEmail(false);
//     } else {
//       setEmailMessage('사용 가능한 이메일 입니다.');
//       setIsEmail(true);
//     }
//   };

//   // 회원가입 버튼 눌렀을때
//   const onSubmit = () => {
//     const data = { id, password, email, name };
//     console.log(data);
//     console.log(id);
//     // 회원정보 front에서 valid 판단하는 함수 만들기

//     // 아이정보 묻는 창으로 넘어가기
//     navigate(`../kids`);
//   };
//   return (
//     <>
//       <h3>Sign Up</h3>
//       <div className="form">
//         <div className="form-el">
//           <label htmlFor="id">Id</label> <br />
//           <input id="id" name="id" value={id} onChange={onChangeId} />
//           <p className="message"> {idMessage} </p>
//         </div>

//         <div className="form-el">
//           <label htmlFor="name">Nick Name</label> <br />
//           <input id="name" name="name" value={name} onChange={onChangeName} />
//           <p className="message">{nameMessage}</p>
//         </div>
//         <div className="form-el">
//           <label htmlFor="password">Password</label> <br />
//           <input id="password" name="password" value={password} onChange={onChangePassword} />
//           <p className="message">{passwordMessage}</p>
//         </div>
//         <div className="form-el">
//           <label htmlFor="passwordConfirm">Password Confirm</label> <br />
//           <input
//             id="passwordConfirm"
//             name="passwordConfirm"
//             value={passwordConfirm}
//             onChange={onChangePasswordConfirm}
//           />
//           <p className="message">{passwordConfirmMessage}</p>
//         </div>
//         <div className="form-el">
//           <label htmlFor="email">Email</label> <br />
//           <input id="email" name="name" value={email} onChange={onChangeEmail} />
//           <p className="message">{emailMessage}</p>
//         </div>

//         <br />
//         <br />
//         <button type="submit" onClick={onSubmit}>
//           회원가입
//         </button>
//         {/* <p>{userInfo}</p> */}
//       </div>
//     </>
//   );
// };
