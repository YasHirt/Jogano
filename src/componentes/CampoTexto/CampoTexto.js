import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = (props) => {
   
    //hooks só podem ser chamados dentro do componente
    const [valor, setValor] = useState('Yasmin Dev') //retorna um array com dois itens: o valor atual do estado (aqui chamado valor) e a função que atualiza esse estado (setValor).
    const aoDigitar = (e) => 
        {
            setValor(e.target.value)  //Nova renderização que atualiza o valor da constante valor
            console.log(valor)

        }
    return (

        <div className="CampoTexto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto