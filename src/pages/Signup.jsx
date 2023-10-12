import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
} from '@mui/material';

export default function Signup() {
  return (
    <Box
      bgcolor={'grey'}
      flex={0.5}
      p={2}
      justifyContent="center"
      alignItems="center">
      <Typography variant="h5" color={'primary'}>
        Register
      </Typography>
      <Box
        width={400}
        sx={{
          maxWidth: 545,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <TextField
          id="firtsname"
          label="Firstname"
          variant="outlined"
          sx={{ width: 190 }}
        />
        <TextField
          id="lastname"
          label="Lastname"
          variant="outlined"
          sx={{ width: 190 }}
        />
      </Box>

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
        Sign Up
      </Button>
      <Typography variant="subtitle1">
        Have an Account?
        <Link href="#" underline="none">
          {' Sign In'}
        </Link>
      </Typography>
    </Box>
  );
}
