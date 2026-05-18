import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get("https://6a0b593421e445625697d307.mockapi.io/filmes")
      .then(resposta => setFilmes(resposta.data))
      .catch(erro => console.error(erro));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Início - Filmes</h1>
      <ul>
        {filmes.map(filme => (
          <li key={filme.id} style={{ marginBottom: '10px' }}>
            ID: {filme.id} | Nome: {filme.nome}
            <Link to={`/Read/${filme.id}`} style={{ marginLeft: '10px' }}>
                <button>Ler</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}