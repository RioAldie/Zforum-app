import { Container } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Loading from '../components/Loading';

const Layout = ({ children, authUser }) => {
  return (
    <>
      <ResponsiveAppBar authUser={authUser} />
      <Container
        sx={{
          padding: { xs: 0, sm: 0, lg: '20px' },
          marginTop: '100px',
        }}>
        <Loading />
        {children}
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  authUser: PropTypes.any,
};
export default Layout;
