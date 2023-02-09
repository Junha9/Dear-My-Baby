import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useMemberMethod, useMemberReload } from '@/commons/MemberContext';

export default function LoginForm() {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [warnings, setWarnings] = useState({});

  const { login } = useMemberMethod();
  const memberReload = useMemberReload();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async function (event) {
      event.preventDefault();

      if (memberId == null || memberId == '') {
        setWarnings({ memberId: '아이디를 입력하세요' });
        return;
      } else if (password == null || password == '') {
        setWarnings({ password: '비밀번호를 입력하세요' });
        return;
      }

      try {
        await login(memberId, password);
        await memberReload();
        navigate('/');
      } catch (error) {
        // console.log("failed to login")
        setWarnings({ password: '비밀번호가 올바르지 않습니다' });
      }
    },
    [memberId, password],
  );

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={warnings.memberId != null}
            helperText={warnings.memberId}
            margin="normal"
            required
            fullWidth
            label="아이디"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="아이디 기억하기" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontFamily: 'inherit' }}>
            로그인
          </Button>
          <Grid container justifyContent="center">
            {/* <Grid item xs>
              <Link to="#">비밀번호를 잊으셨나요?</Link>
            </Grid> */}
            <Grid item>
              <Link to="../sign-up">회원이 아니신가요? 가입하기</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
