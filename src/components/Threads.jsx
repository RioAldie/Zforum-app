import { Box } from '@mui/material';
import Thread from './Thread';
import PropTypes from 'prop-types';

const Threads = ({ threads }) => {
  return (
    <Box
      sx={{
        maxHeight: 'maxContent',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
      }}>
      {threads.map((thread, i) => {
        if (thread !== undefined) {
          return <Thread key={i} {...thread} />;
        }
      })}
    </Box>
  );
};

Threads.propTypes = {
  threads: PropTypes.array,
};

export default Threads;
