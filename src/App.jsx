import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Read from './pages/Read';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '15px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <Link to="/">Início</Link>
        <Link to="/Create">Create Filme</Link>
        <Link to="/Edit">Edit Filme</Link>
        <Link to="/Delete">Delete Filme</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Read/:id" element={<Read />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;