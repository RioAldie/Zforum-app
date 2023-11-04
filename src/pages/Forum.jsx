import Sidebar from '../components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import Threads from '../components/Threads';
import { Box, Typography } from '@mui/material';
import AddThreadTrigger from '../components/AddThreadTrigger';
import Leaderboard from '../components/Leaderboard';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

const Forum = () => {
  const {
    threads = [],
    users = [],
    authUser,
    leaderboards,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(asyncReceiveLeaderboards());
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
        <Typography
          variant="h5"
          sx={{ marginBottom: '20px' }}
          color={'primary'}>
          Zforum
        </Typography>
        <AddThreadTrigger authUser={authUser} />
        <Threads threads={threadList} />
      </Box>
      <Leaderboard leaderboards={leaderboards} />
    </Box>
  );
};

export default Forum;
