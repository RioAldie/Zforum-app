import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginForm() {
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
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Link to={'/forum'}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary">
          Masuk
        </Button>
      </Link>
      <Typography variant="subtitle1">
        Belum Punya Akun?
        <Link href="#" underline="none">
          {' daftar disini'}
        </Link>
      </Typography>
    </Box>
  );
}
