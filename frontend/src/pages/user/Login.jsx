import LoginForm from "./LogInForm";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <LoginForm></LoginForm>

      <button onClick={() => { navigate(`sign-up`) }
      }>회원 가입 하기</button>
    </>
  )
}

export default Login;
