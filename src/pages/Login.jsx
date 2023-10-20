import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
};

export default Login;
