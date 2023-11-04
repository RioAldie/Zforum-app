import { Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SignupInput = ({ handleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
