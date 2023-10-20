import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddThreadTrigger = ({ authUser }) => {
  const { avatar, name } = authUser;
  return (
    <Paper
      elevation={2}
      sx={{
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: { xs: '300px', sm: '500px', lg: '645px' },
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
        label="Thread"
        type="text"
        variant="outlined"
        defaultValue="Apa Yang kamu Pikirkan hari ini?"
        size="small"
      />
      <Link to={'/add'}>
        <Button variant="contained" size="small">
          buat thread
        </Button>
      </Link>
    </Paper>
  );
};
AddThreadTrigger.propTypes = {
  authUser: PropTypes.object,
};
export default AddThreadTrigger;
