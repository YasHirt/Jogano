import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Jogo from './componentes/Jogo/Jogo'
import CardJogador from './componentes/CardJogador/CardJogador';

const jogos = [
  {
    nome: 'Xadrez',
    corPrimaria: '#D9F7E9',
    corSecundaria: '#57C278'
  },

  {
    nome: 'Damas',
    corPrimaria: '#E8F8FF',
    corSecundaria: '#82CFFA'
  },

  {
    nome: 'Detetive',
    corPrimaria: '#F0F8E2',
    corSecundaria: '#A6D157'
  },

  {
    nome: 'Banco Imobiliário',
    corPrimaria: '#FDE7E8',
    corSecundaria: '#E06B69'
  },

  {
    nome: 'RPG',
    corPrimaria: '#FAE9F5',
    corSecundaria: '#DB6EBF'
  },

  {
    nome: 'Monopoly',
    corPrimaria: '#FFF5D9',
    corSecundaria: '#FFBA05'
  },

  {
    nome: 'Baralho',
    corPrimaria: '#FFEEDF',
    corSecundaria: '#FF8A29'
  }
]

function App() {
  
  const [colaboradores, setColaborades] = useState([])
  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaborades([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario listaDeJogos={jogos.map(jogo => jogo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)} />

      {jogos.map(jogo => <Jogo

        key={jogo.nome}
        nome={jogo.nome}
        corPrimaria={jogo.corPrimaria}
        corSecundaria={jogo.corSecundaria}
        colaboradores={colaboradores} />)}


    </div>
  );
}

export default App;
