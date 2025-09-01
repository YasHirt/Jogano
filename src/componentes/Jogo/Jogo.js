import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"

const Jogo = (props) =>
{
    return (
        <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>

            {props.colaboradores.map(colaborador => <CardJogador nome={colaborador.nome} imagem={colaborador.imagem}/>)}
        </section>
    )
}

export default Jogo