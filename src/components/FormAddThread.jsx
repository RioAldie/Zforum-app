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

const FormAddThread = ({ addThread }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}>
        <Avatar>R</Avatar>
        <Typography>Rio Aldi</Typography>
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
        variant="outlined"
        size="small"
        onClick={() => handleAddThread()}>
        buat thread
      </Button>
    </Paper>
  );
};

FormAddThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default FormAddThread;
