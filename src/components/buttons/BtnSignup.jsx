import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../states/users/action';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BtnSignup = ({ register }) => {
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      onClick={() => register()}>
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
