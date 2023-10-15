import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../states/users/action';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnSignup = ({ name, id, password }) => {
  const dispatch = useDispatch();

  const handleRegister = ({ name, id, password }) => {
    dispatch(asyncRegisterUser({ id, name, password }));

    Navigate('/');
  };
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      onClick={() => handleRegister({ name, id, password })}>
      Daftar
    </Button>
  );
};

BtnSignup.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  password: PropTypes.string,
};

export default BtnSignup;
