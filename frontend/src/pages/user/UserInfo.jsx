import { Link } from 'react-router-dom';
import './Userinfo.css';
import { useMember, useMemberReload } from '@/commons/MemberContext';

/** API 설명용 */
import { useState } from 'react';
import { useMemberAuth } from '@/commons/MemberContext';
import { apiGetMember } from '@/commons/api/member';
import { green } from '@mui/material/colors';

export default function UserInfo() {
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();

  /** API 설명용 */
  const [testMember, setTestMember] = useState(null);

  return (
    <div style={{backgroundColor:'rgba(255, 255, 255,0.922'}}>
      <div style={{}}>
        <h2 style={{margin:'5px'}}>회원정보</h2>
        <div>
          <ul>
            <li>
              <Link to="login">로그인하기</Link>
            </li>
            <li>
              <Link to="sign-up">회원가입하기</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr></hr> */}
    
      <button style={{backgroundColor:'white',
      borderRadius:'5px',
      color:'rgb(1 116 163)',
      border:'2px solid rgb(1 116 163)',
      margin:'5px',
      fontWeight:'800',
      marginLeft: '25px',
      marginRight: '25px'
      }}
      
      onClick={memberReload}>memberReload1</button>
      {!!member && (
        <div >

          <div style={{display:'flex', justifyContent: 'center'}}>
            <img
              src="/assets/baby.jpg"
              style={{ height: '110px', width: '110px', borderRadius: '50%', boxShadow: '0px 2px 2px'}}
              alt="img"
            />
          </div>
          <div style={{padding:'20px', borderRadius:'10px', backgroundColor:'rgb(1,1,1,0.03)'}}>
            <ul style={{marginRight:'30px'}}>
              <li style={{color:'grey',padding:'5px'}}>이름</li>
              <li style={{fontSize:'20px'}}>{member.memberName}</li>
              <hr style={{backgroundColor:'#b7449c', height:'3px'}}></hr>
              <li style={{color:'grey',padding:'5px',paddingTop:'10px'}}>이메일</li>
              <li style={{fontSize:'20px'}}>{member.memberEmail}</li>
              <hr style={{backgroundColor:'#b7449c', height:'3px'}}></hr>
              <li style={{color:'grey',padding:'5px',paddingTop:'10px'}}>닉네임</li>
              <li style={{fontSize:'20px'}}>{member.memberId}</li>
              <hr style={{backgroundColor:'#b7449c', height:'3px'}}></hr>
            </ul>
          </div>
          <li>{member.memberImg}</li>
          {/* <p>{JSON.stringify(member)}</p> */}
        </div>
      )}


    </div>
  );
}








// <button style={{backgroundColor:'rgb(255,255,255)',
// borderRadius:'5px',
// color:'rgb(1 116 163)',
// border:'2px solid rgb(1 116 163)',
// margin:'5px',
// fontWeight:'800',
// marginLeft:'25px',
// marginRight: '25px'

// }}
//  onClick={() => auth((token) => apiGetMember(token)).then(({ data }) => setTestMember(data))}>
//   memberReload2
// </button>
// {!!testMember && (
//   <div>
//     <ul>
//       <li>이름 : {testMember.memberName}</li>
//       <li>이메일 : {testMember.memberEmail}</li>
//       <li>닉네임 : {testMember.memberId}</li>
//       <li>{testMember.memberImg}</li>
//     </ul>

//   </div>
// )}
          {/* <p>{JSON.stringify(testMember)}</p> */}