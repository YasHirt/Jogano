import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"

const Jogo = (props) =>
{
    return (
        // No React, o style recebe um objeto JavaScript, não uma string.
        <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <CardJogador/>
        </section>
    )
}

export default Jogo