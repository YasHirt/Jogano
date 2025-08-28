import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = (props) => {
   
  
    const aoDigitar = (e) => 
        {
           let consoleValor = e.target.value
           props.aoAlterado(e.target.value) //passamos o parâmetro para a função que recebemos na prop
        console.log(consoleValor)
        }
    return (

        <div className="CampoTexto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto