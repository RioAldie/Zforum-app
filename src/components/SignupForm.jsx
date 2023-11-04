import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import SignupInput from './testing/SignupInput';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/login');
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
      <Typography variant="h5" color={'primary'}>
        Register
      </Typography>

      <SignupInput handleRegister={handleRegister} />
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
