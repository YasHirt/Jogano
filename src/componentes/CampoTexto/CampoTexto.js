import './CampoTexto.css'
const CampoTexto = (props) => {
    return (
        <div className="CampoTexto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto