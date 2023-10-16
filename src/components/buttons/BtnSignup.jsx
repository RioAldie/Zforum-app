import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../states/users/action';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnSignup = ({ name, email, password }) => {
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(asyncRegisterUser({ email, name, password }));

    Navigate('/');
  };
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      onClick={() => handleRegister()}>
      Daftar
    </Button>
  );
};

BtnSignup.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default BtnSignup;
