import { Box } from '@mui/material';
import FormAddThread from '../components/FormAddThread';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/thread/action';
import Loading from '../components/Loading';

const AddThread = () => {
  const dispatch = useDispatch();
  const onAddTalk = (title, body) => {
    dispatch(asyncAddThread({ title, body }));
  };
  return (
    <Box>
      <Loading />
      <FormAddThread addThread={onAddTalk} />
    </Box>
  );
};

export default AddThread;
