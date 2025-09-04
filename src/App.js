import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Jogo from './componentes/Jogo/Jogo'

function App() {

  
const [jogos, setJogos] = useState([
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
])
  const [colaboradores, setColaborades] = useState([])

  const mudarCorDoTime = (cor, nome) =>
  {
    setJogos(jogos.map( jogo => 
      {if(jogo.nome === nome)
        jogo.corSecundaria = cor
        return jogo
      }
    ))
  }

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaborades([...colaboradores, colaborador])
  }

  const DeletandoColaborador = (id) =>
  {
    setColaborades(colaboradores.filter(colaborador => colaborador.id !== id))
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
        aoDeletar={id => DeletandoColaborador(id)}
        mudarCor={mudarCorDoTime}
        colaboradores={colaboradores.filter(colaborador =>colaborador.lista == jogo.nome)} />)}


    </div>
  );
}

export default App;
