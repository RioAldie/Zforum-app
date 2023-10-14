import { Box } from '@mui/material';
import Thread from '../components/Thread';
import Sidebar from '../components/SideBar';

const Forum = () => {
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
      <Thread />
    </Box>
  );
};

export default Forum;
