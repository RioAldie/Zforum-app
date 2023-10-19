import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FormAddThread = ({ addThread, authUser }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { avatar, name } = authUser;
  function handleAddThread() {
    addThread(title, body);
  }
  return (
    <Paper
      elevation={2}
      sx={{
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: { xs: '390px', sm: '500px', lg: '800px' },
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}>
        <Avatar src={avatar}></Avatar>
        <Typography>{name}</Typography>
      </Box>
      <TextField
        fullWidth
        label="Judul"
        type="text"
        variant="outlined"
        placeholder="Apa Yang kamu Pikirkan hari ini?"
        size="small"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-multiline-static"
        label="Isi Thread"
        multiline
        rows={4}
        placeholder="Apa Yang kamu Pikirkan hari ini?"
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        onClick={() => handleAddThread()}>
        Buat
      </Button>
    </Paper>
  );
};

FormAddThread.propTypes = {
  addThread: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};
export default FormAddThread;
