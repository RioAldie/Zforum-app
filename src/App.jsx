import Layout from './layout/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
