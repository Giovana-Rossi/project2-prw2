import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Criar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');

  const handleCriar = (e) => {
    e.preventDefault();
    axios.post("https://6a0b593421e445625697d307.mockapi.io/filmes", { nome, genero, ano })
      .then(() => navigate('/'))
      .catch(erro => console.error(erro));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Criar Filme</h1>
      <form onSubmit={handleCriar} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input type="text" placeholder="Nome do filme" value={nome} onChange={e => setNome(e.target.value)} required />
        <input type="text" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} required />
        <input type="text" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">Criar</button>
          <button type="button" onClick={() => navigate('/')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}