import { Box } from '@mui/material';
import FormAddThread from '../components/FormAddThread';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddThread } from '../states/thread/action';
import { useNavigate } from 'react-router-dom';

const AddThread = () => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onAddTalk = (title, body) => {
    dispatch(asyncAddThread({ title, body }));

    navigate('/forum');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FormAddThread addThread={onAddTalk} authUser={authUser} />
    </Box>
  );
};

export default AddThread;
