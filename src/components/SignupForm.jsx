import { Box, TextField, Typography } from '@mui/material';
import BtnSignup from './buttons/BtnSignup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        width: { xs: 380, sm: 480, lg: 500 },
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '100px',
      }}>
      <Typography variant="h5" color={'primary'}>
        Register
      </Typography>

      <TextField
        fullWidth
        label="Nama"
        type="text"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
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
      <BtnSignup name={name} password={password} email={email} />
      <Typography variant="subtitle1">
        Sudah Punya Akun?
        <Link to={'/login'}>
          <span style={{ color: 'yellow' }}>{' login disini'}</span>
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;
