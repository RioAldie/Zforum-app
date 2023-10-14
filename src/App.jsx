import Layout from './layout/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Forum from './pages/Forum';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
