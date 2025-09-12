import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Jogo from './componentes/Jogo/Jogo'
import { v4 as uuidv4 } from 'uuid';

function App() {

const [jogos, setJogos] = useState([
  {
    nomeJogo: 'Xadrez',
    corPrimaria: '#D9F7E9',
    corSecundaria: '#57C278',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'Damas',
    corPrimaria: '#E8F8FF',
    corSecundaria: '#82CFFA',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'Detetive',
    corPrimaria: '#F0F8E2',
    corSecundaria: '#A6D157',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'Banco Imobiliário',
    corPrimaria: '#FDE7E8',
    corSecundaria: '#E06B69',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'RPG',
    corPrimaria: '#FAE9F5',
    corSecundaria: '#DB6EBF',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'Monopoly',
    corPrimaria: '#FFF5D9',
    corSecundaria: '#FFBA05',
    idJogo: uuidv4()
  },

  {
    nomeJogo: 'Baralho',
    corPrimaria: '#FFEEDF',
    corSecundaria: '#FF8A29',
    idJogo: uuidv4()
  }
])
  const [colaboradores, setColaborades] = useState([])

  const mudarCorDoTime = (cor, idJogo) =>
  {
    setJogos(jogos.map( jogo => 
      {if(jogo.idJogo === idJogo)
        jogo.corSecundaria = cor
        return jogo
      }
    ))
  }

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaborades([...colaboradores, colaborador])
  }

  const favoritarColaborador = (id) =>
  {
    setColaborades(colaboradores.map(colaborador =>  
    {
      if(colaborador.id === id) 
      {
        return {...colaborador, favorito: !colaborador.favorito}
      }
        return colaborador  
    }
    ))
  }

  const DeletandoColaborador = (id) =>
  {
    setColaborades(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const AdcionarNovoJogo = (novoJogo) =>
  {
    setJogos([...jogos, novoJogo])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario listaDeJogos={jogos.map(jogo => jogo.nomeJogo)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)} adcionarNovoJogo={AdcionarNovoJogo} />

      {jogos.map(jogo => <Jogo

        key={jogo.nomeJogo}
        nome={jogo.nomeJogo}
        corPrimaria={jogo.corPrimaria}
        corSecundaria={jogo.corSecundaria}
        aoDeletar={id => DeletandoColaborador(id)}
        mudarCor={mudarCorDoTime}
        idJogo={jogo.idJogo}
        favoritarColaborador={favoritarColaborador}
        colaboradores={colaboradores.filter(colaborador =>colaborador.lista == jogo.nomeJogo)} />)}

      
      <Jogo
      key={"favoritos"}
      nome={"Favoritos"}
      corPrimaria={'#A1E3F9'}
      corSecundaria={'#3674B5'}
      favoritarColaborador={favoritarColaborador}
      colaboradores={colaboradores.filter(colaborador => colaborador.favorito)} />




    </div>
  );
}

export default App;
