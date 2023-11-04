import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from './testing/LoginInput';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/forum');
  };
  return (
    <Box
      sx={{
        width: { xs: 380, sm: 480, lg: 500 },
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '100px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}>
        <img
          src="/images/genz-logo.png"
          alt="logo"
          width={30}
          height={20}
        />
        <Typography variant="h5" color={'primary'}>
          Login
        </Typography>
      </Box>

      <LoginInput handleLogin={handleLogin} />

      <Typography variant="subtitle1">
        Belum Punya Akun?
        <Link to={'/signup'}>
          <span style={{ color: 'yellow' }}>{' daftar disini'}</span>
        </Link>
      </Typography>
    </Box>
  );
}
