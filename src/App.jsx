import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import AdminToolbar from './components/AdminToolbar';

function App() {
  return (
    <BrowserRouter>
      <AdminToolbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
