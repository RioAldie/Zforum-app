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

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

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
        <Layout authUser={authUser}>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
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
