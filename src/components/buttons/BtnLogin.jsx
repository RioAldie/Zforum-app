import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BtnLogin = () => {
  return (
    <Link to={'/login'}>
      <Button variant="contained">Login</Button>;
    </Link>
  );
};

export default BtnLogin;
