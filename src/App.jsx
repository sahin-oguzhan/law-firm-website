import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminToolbar from './components/AdminToolbar';
import ArticleDetail from './pages/ArticleDetail';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <BrowserRouter>
      <AdminToolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />

        <Route path="/makaleler" element={<ArticlesPage />} />
        <Route path="/makale/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
