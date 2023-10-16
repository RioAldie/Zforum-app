import { Box, TextField, Typography } from '@mui/material';
import BtnSignup from './buttons/BtnSignup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
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
        <Link to={'/login'}>{' Login disini'}</Link>
      </Typography>
    </Box>
  );
}
