import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginForm() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };
  return (
    <Box
      sx={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}>
      <Typography variant="h5" color={'primary'}>
        Login
      </Typography>
      <TextField
        fullWidth
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={() => handleLogin(email, password)}>
        Masuk
      </Button>

      <Typography variant="subtitle1">
        Belum Punya Akun?
        <Link to={'/signup'}>{' daftar disini'}</Link>
      </Typography>
    </Box>
  );
}
