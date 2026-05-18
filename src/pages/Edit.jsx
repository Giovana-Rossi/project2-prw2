import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Alterar() {
  const navigate = useNavigate();
  const [idBusca, setIdBusca] = useState('');
  const [filme, setFilme] = useState(null);
  const [tela, setTela] = useState('busca'); // 'busca' | 'encontrado' | 'erro'

  const handleProcura = () => {
    axios.get(`https://6a0b593421e445625697d307.mockapi.io/filmes/${idBusca}`)
      .then(resposta => {
        setFilme(resposta.data);
        setTela('encontrado');
      })
      .catch(() => setTela('erro'));
  };

  const handleAltera = (e) => {
    e.preventDefault();
    axios.put(`https://6a0b593421e445625697d307.mockapi.io/filmes/${filme.id}`, filme)
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
        <h1>Alterar Dados</h1>
        <form onSubmit={handleAltera} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
          <input type="text" value={filme.nome} onChange={e => setFilme({ ...filme, nome: e.target.value })} required />
          <input type="text" value={filme.genero} onChange={e => setFilme({ ...filme, genero: e.target.value })} required />
          <input type="text" value={filme.ano} onChange={e => setFilme({ ...filme, ano: e.target.value })} required />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit">Altera</button>
            <button type="button" onClick={() => navigate('/')}>Cancela</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Alterar Filme</h1>
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