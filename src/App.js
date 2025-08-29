import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

const [colaboradores, setColaborades] = useState([])

const aoNovoColaboradorAdcionado = (colaborador) =>
{
  setColaborades([...colaboradores, colaborador])
}
function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)} />
    </div>
  );
}

export default App;
