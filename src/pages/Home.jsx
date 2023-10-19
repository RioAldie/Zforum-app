import { Box, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', lg: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}>
      <Box
        sx={{
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '100px',
        }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '800',
            fontSize: '64px',
          }}>
          Proud being a{' '}
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '800',
              fontSize: '64px',
              color: '#8561c5',
            }}>
            Gen-Z
          </Typography>
        </Typography>
        <Typography variant="body1">
          Kamu Gen-Z? Ayo Bertukar Pikiran bersama Gen-Z lain, untuk
          membuktikan bahwa Gen-Z tidak seburuk yang dipikirkan oleh
          orang-orang diluar sana
        </Typography>

        <Link to={'/forum'}>
          <Button
            variant="contained"
            sx={{ width: '200px' }}
            endIcon={<SendIcon />}>
            Mulai
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          marginTop: '50px',
          display: { xs: 'none', sm: 'none', lg: 'block' },
        }}>
        <img src="/images/genz-hero.png" alt="genz-hero" />
      </Box>
      <Box
        sx={{
          marginTop: '50px',
          display: { xs: 'block', sm: 'block', lg: 'none' },
        }}>
        <img src="/images/genz-hero-mobile.png" alt="genz-hero" />
      </Box>
    </Box>
  );
};

export default Home;
