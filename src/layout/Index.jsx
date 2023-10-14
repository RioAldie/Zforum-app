import { Container } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ padding: '20px' }}>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
