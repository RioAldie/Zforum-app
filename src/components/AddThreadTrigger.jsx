import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const AddThreadTrigger = () => {
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
        label="New Thread"
        type="text"
        variant="outlined"
        placeholder="Apa Yang kamu Pikirkan hari ini?"
        size="small"
      />
      <Link to={'/add'}>
        <Button variant="outlined" size="small">
          buat thread
        </Button>
      </Link>
    </Paper>
  );
};

export default AddThreadTrigger;
