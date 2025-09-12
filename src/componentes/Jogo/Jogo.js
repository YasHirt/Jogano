import CardJogador from "../CardJogador/CardJogador"
import "./Jogo.css"
import { FaStar } from "react-icons/fa";

const Jogo = (props) =>
{
    return (

       props.colaboradores.length > 0 && <section className="sectionJogo"
        style={{backgroundColor: props.corPrimaria}}>
            <input type="color" onChange={e => props.mudarCor(e.target.value, props.idJogo)} value={props.corSecundaria} className="input-cor"/>
            {props.nome == "Favoritos" ? <h3 style={{borderColor: props.corSecundaria}}><FaStar/> {props.nome} <FaStar/></h3> :<h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>}
            <div className="colaboradoes"> 
            {props.colaboradores.map(colaborador => {
                return <CardJogador
                jogo={props.nome}
                id={colaborador.id} 
                key={colaborador.nome}
                aoDeletar={()=> props.aoDeletar(colaborador.id)}
                corCabecalho={props.corSecundaria}
                nome={colaborador.nome} imagem={colaborador.imagem}
                descricao={colaborador.descricao} 
                favorito={colaborador.favorito}
                favoritar={id => props.favoritarColaborador(id)} />
            })}
            
            </div>
        </section>
    )
}

export default Jogo