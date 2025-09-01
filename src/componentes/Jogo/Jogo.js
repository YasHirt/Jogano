import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"

const Jogo = (props) =>
{
    return (
        <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="colaboradoes"> 
            {props.colaboradores.map(colaborador => <CardJogador nome={colaborador.nome} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Jogo