import { Box, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
        <Typography variant="h3">Proud being a Gen-Z</Typography>
        <Typography variant="body1">
          Kamu Gen-Z? Ayo Bertukar Pikiran bersama Gen-Z lain, untuk
          membuktikan bahwa Gen-Z tidak seburuk yang dipikirkan oleh
          orang-orang diluar sana
        </Typography>
        <Link to={'login'}>
          <Link to={'/login'}>
            <Button
              variant="contained"
              sx={{ width: '200px' }}
              endIcon={<SendIcon />}>
              Mulai
            </Button>
          </Link>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
