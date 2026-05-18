import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Apagar() {
  const navigate = useNavigate();
  const [idBusca, setIdBusca] = useState('');
  const [filme, setFilme] = useState(null);
  const [tela, setTela] = useState('busca');

  const handleProcura = () => {
    axios.get(`https://6a0b593421e445625697d307.mockapi.io/filmes/${idBusca}`)
      .then(resposta => {
        setFilme(resposta.data);
        setTela('encontrado');
      })
      .catch(() => setTela('erro'));
  };

  const handleApaga = () => {
    axios.delete(`https://6a0b593421e445625697d307.mockapi.io/filmes/${filme.id}`)
      .then(() => navigate('/'))
      .catch(erro => console.error(erro));
  };

  if (tela === 'erro') {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Filme não achado!</h2>
        <button onClick={() => navigate('/')}>Voltar para Início</button>
      </div>
    );
  }

  if (tela === 'encontrado') {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Apagar Filme</h1>
        <p>Tem certeza que deseja apagar o filme: <strong>{filme.nome}</strong>?</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleApaga} style={{ backgroundColor: 'red', color: 'white' }}>Apaga</button>
          <button onClick={() => navigate('/')}>Cancela</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Apagar Filme</h1>
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input type="text" placeholder="Digite o ID do filme" value={idBusca} onChange={e => setIdBusca(e.target.value)} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleProcura}>Procura</button>
          <button onClick={() => navigate('/')}>Cancela</button>
        </div>
      </div>
    </div>
  );
}