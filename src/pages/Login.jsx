import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoginForm />
    </Box>
  );
}
