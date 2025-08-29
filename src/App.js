import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Jogo from './componentes/Jogo/Jogo'

function App() {
  const [colaboradores, setColaborades] = useState([])
  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaborades([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)} />
      <Jogo nome="Xadrez" />
      <Jogo nome="Damas"/>
    </div>
  );
}

export default App;
