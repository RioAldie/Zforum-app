import { Button, FormControl, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const SignupInput = ({ handleRegister }) => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  return (
    <FormControl
      sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        fullWidth
        label="Nama"
        type="text"
        placeholder="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        id="email"
        label="Email"
        placeholder="Email"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        placeholder="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={() => handleRegister({ email, name, password })}>
        Daftar
      </Button>
    </FormControl>
  );
};

SignupInput.propTypes = {
  handleRegister: PropTypes.func,
};

export default SignupInput;
