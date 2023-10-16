import { Box } from '@mui/material';
import Thread from '../components/Thread';
import Sidebar from '../components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

const Forum = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  // const onAddTalk = (text) => {

  //   dispatch(asyncAddTalk({ text }));
  // };

  // const onLike = (id) => {

  //   dispatch(asyncToogleLikeTalk(id));
  // };

  // const talkList = talks.map((talk) => ({
  //   ...talk,
  //   user: users.find((user) => user.id === talk.user),
  //   authUser: authUser.id,
  // }));

  console.log('data =>', threads);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        width: '80%',
      }}>
      <Sidebar />
      <Box>
        <Thread />
      </Box>
    </Box>
  );
};

export default Forum;
