import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"

const Jogo = (props) =>
{
    return (

       props.colaboradores.length > 0 && <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <input type="color" onChange={e => props.mudarCor(e.target.value, props.idJogo)} value={props.corSecundaria} className="input-cor"/>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="colaboradoes"> 
            {props.colaboradores.map(colaborador => {
                console.log("Renderizando colaborador")
                return <CardJogador key={colaborador.nome} aoDeletar={()=> props.aoDeletar(colaborador.id)} corCabecalho={props.corSecundaria} nome={colaborador.nome} imagem={colaborador.imagem} descricao={colaborador.descricao}/>
            })}
            
            </div>
        </section>
    )
}

export default Jogo