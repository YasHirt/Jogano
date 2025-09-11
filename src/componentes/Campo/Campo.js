import './Campo.css'
const Campo = (props) => {
   
    return (

        <div className={`CampoTexto Campo-${props.type || "text"}`}>
            <label>
                {props.label}
            </label>
            <input type={props.type || "text"} value={props.valor} onChange={(e) => props.aoAlterado(e.target.value)} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default Campo