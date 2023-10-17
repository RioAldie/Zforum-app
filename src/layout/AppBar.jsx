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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Link to={'/forum'}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <AdbIcon
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  mr: 1,
                  color: '#fff',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#fff',
                  textDecoration: 'none',
                }}>
                LOGO
              </Typography>
            </Box>
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
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
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
