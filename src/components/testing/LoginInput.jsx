import { Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginInput = ({ handleLogin }) => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  return (
    <FormControl>
      <TextField
        fullWidth
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
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
        name="Login"
        color="primary"
        onClick={() => handleLogin(email, password)}>
        Masuk
      </Button>
    </FormControl>
  );
};

LoginInput.propTypes = {
  handleLogin: PropTypes.func,
};

export default LoginInput;
