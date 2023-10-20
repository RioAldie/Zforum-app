import { Box } from '@mui/material';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SignupForm />
    </Box>
  );
};
export default Signup;
