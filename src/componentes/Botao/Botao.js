import "./Botao.css"
const Botao = (props) => {
    return (
        <div>
        <button className="button" type="submit">{props.children}</button>
        </div>

    )
}

export default Botao;