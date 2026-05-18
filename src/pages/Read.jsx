import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Ler() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    axios.get(`https://6a0b593421e445625697d307.mockapi.io/filmes/${id}`)
      .then(resposta => setFilme(resposta.data))
      .catch(erro => console.error(erro));
  }, [id]);

  if (!filme) return <p style={{ padding: '20px' }}>Carregando...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dados do Filme</h1>
      <p><strong>ID:</strong> {filme.id}</p>
      <p><strong>Nome:</strong> {filme.nome}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <br />
      <button onClick={() => navigate('/')}>Cancelar</button>
    </div>
  );
}