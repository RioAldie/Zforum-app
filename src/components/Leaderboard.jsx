import { Box, Typography, List } from '@mui/material';
import Contributor from './Contributor';
import PropTypes from 'prop-types';

const Leaderboard = ({ leaderboards }) => {
  return (
    <Box
      flex={1.5}
      sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
      <Box position="fixed" sx={{ top: '100px', right: '50px' }}>
        <Box
          justifyContent="center"
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
          }}>
          <Typography variant="h5"> Top Contributors</Typography>
        </Box>

        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}>
          {leaderboards.map((contributor, i) => {
            if (i < 5) {
              return (
                <Contributor
                  key={i}
                  {...contributor.user}
                  score={contributor.score}
                />
              );
            }
          })}
        </List>
      </Box>
    </Box>
  );
};

Leaderboard.propTypes = {
  leaderboards: PropTypes.object,
};
export default Leaderboard;
