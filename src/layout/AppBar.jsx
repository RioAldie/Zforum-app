import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnLogin from '../components/buttons/BtnLogin';
import BtnLogout from '../components/buttons/BtnLogout';

const ResponsiveAppBar = ({ authUser }) => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Link to={'/forum'}>
            <img
              src="/images/genz-logo.png"
              alt="logo"
              width={60}
              height={40}
            />
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            {authUser === null ? (
              <BtnLogin />
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '15px',
                }}>
                <Avatar
                  alt={authUser.name}
                  sx={{
                    display: { xs: 'none', sm: 'block', lg: 'block' },
                  }}
                  src={authUser.avatar}
                />
                <BtnLogout />
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

ResponsiveAppBar.propTypes = {
  authUser: PropTypes.any,
};
export default ResponsiveAppBar;
