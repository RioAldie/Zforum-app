import Layout from './layout/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Forum from './pages/Forum';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPreloadProcess } from './states/isPreload/action';
import AddThread from './pages/AddThread';
import DetailThread from './pages/Detail';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: '#673ab7',
      },
      secondary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    console.log('preload');
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout authUser={authUser}>
            <Routes>
              <Route path="/*" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Layout authUser={authUser}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add" element={<AddThread />} />
            <Route path="/thread/:id" element={<DetailThread />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
