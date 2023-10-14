import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
} from '@mui/material';

export default function SignupForm() {
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
      />
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
      <Button
        fullWidth
        size="large"
        variant="contained"
        color="primary">
        Daftar
      </Button>
      <Typography variant="subtitle1">
        Sudah Punya Akun?
        <Link href="#" underline="none">
          {' Login disini'}
        </Link>
      </Typography>
    </Box>
  );
}
