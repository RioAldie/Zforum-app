import { Container } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import PropTypes from 'prop-types';

const Layout = ({ children, authUser }) => {
  return (
    <>
      <ResponsiveAppBar authUser={authUser} />
      <Container
        sx={{
          padding: { xs: 0, sm: 0, lg: '20px' },
          marginTop: '100px',
        }}>
        {children}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  authUser: PropTypes.any,
};
export default Layout;
