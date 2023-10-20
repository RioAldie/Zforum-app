import { Box } from '@mui/material';
import FormAddThread from '../components/FormAddThread';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddThread } from '../states/thread/action';

const AddThread = () => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const onAddTalk = (title, body) => {
    dispatch(asyncAddThread({ title, body }));
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
