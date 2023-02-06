import { useState } from 'react';
import React from 'react';

const Signup = () => {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [email, setEmail] = React.useState('');

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState('');
  const [nameMessage, setNameMessage] = React.useState('');
  const [passwordMessage, setPasswordMessage] = React.useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState('');
  const [emailMessage, setEmailMessage] = React.useState('');

  // 유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isname, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState({
    userId: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  });
  const { userId, userName, userPassword, userEmail } = userInfo;

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage('4-12사이 대소문자 또는 숫자만 입력해 주세요!');
      setIsId(false);
    } else {
      setIdMessage('사용가능한 아이디 입니다.');
      setIsId(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage('닉네임은 2글자 이상 5글자 이하로 입력해주세요!');
      setIsName(false);
    } else {
      setNameMessage('사용가능한 닉네임 입니다.');
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('떼잉~ 비밀번호가 똑같지 않아요!');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('똑같은 비밀번호를 입력했습니다.');
      setIsPasswordConfirm(true);
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일 입니다.');
      setIsEmail(true);
    }
  };

  // 회원가입 버튼 눌렀을때
  const onSubmit = () => {
    const data = { id, password, email, name };
    console.log(data);
    console.log(id);
    // setUserInfo({
    //   ...userInfo,
    //   [userId]: id,
    //   [userName]: name,
    //   [userPassword]: password,
    //   [userEmail]: email,
    // });
    // console.log(userInfo);
  };
  return (
    <>
      <h3>Sign Up</h3>
      <div className="form">
        <div className="form-el">
          <label htmlFor="id">Id</label> <br />
          <input id="id" name="id" value={id} onChange={onChangeId} />
          <p className="message"> {idMessage} </p>
        </div>

        <div className="form-el">
          <label htmlFor="name">Nick Name</label> <br />
          <input id="name" name="name" value={name} onChange={onChangeName} />
          <p className="message">{nameMessage}</p>
        </div>
        <div className="form-el">
          <label htmlFor="password">Password</label> <br />
          <input id="password" name="password" value={password} onChange={onChangePassword} />
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="form-el">
          <label htmlFor="passwordConfirm">Password Confirm</label> <br />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <p className="message">{passwordConfirmMessage}</p>
        </div>
        <div className="form-el">
          <label htmlFor="email">Email</label> <br />
          <input id="email" name="name" value={email} onChange={onChangeEmail} />
          <p className="message">{emailMessage}</p>
        </div>

        <br />
        <br />
        <button type="submit" onClick={onSubmit}>
          회원가입
        </button>
        {/* <p>{userInfo}</p> */}
      </div>
    </>
  );
};

export default Signup;
