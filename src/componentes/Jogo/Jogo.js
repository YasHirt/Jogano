import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"

const Jogo = (props) =>
{
    return (

       props.colaboradores.length > 0 && <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="colaboradoes"> 
            {props.colaboradores.map(colaborador => <CardJogador key={colaborador.nome} corCabecalho={props.corSecundaria} nome={colaborador.nome} imagem={colaborador.imagem} descricao={colaborador.descricao}/>)}
            </div>
        </section>
    )
}

export default Jogo