import Sidebar from '../components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import Threads from '../components/Threads';
import { Box } from '@mui/material';
import AddThreadTrigger from '../components/AddThreadTrigger';

const Forum = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    console.log('tes');
  }, [dispatch]);

  const threadList = threads.map((thread) => {
    if (thread !== undefined) {
      return {
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
        authUser: authUser.id,
      };
    }
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <Sidebar />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <AddThreadTrigger authUser={authUser} />
        <Threads threads={threadList} />
      </Box>
    </Box>
  );
};

export default Forum;
