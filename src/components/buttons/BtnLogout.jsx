import { useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../../states/authUser/action';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BtnLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());

    navigate('/');
  };
  return (
    <Button onClick={() => onSignOut()} variant="contained">
      Logout
    </Button>
  );
};

export default BtnLogout;
