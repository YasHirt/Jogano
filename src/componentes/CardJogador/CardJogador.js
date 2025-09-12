import './cardJogador.css'
import { TiDelete } from "react-icons/ti";
import { HiMiniHeart, HiOutlineHeart } from "react-icons/hi2";

const CardJogador = (props) =>
{
    //quando tiDelete for clicado, aoDeletar será executado
    return (
        <div className='jogador'>
            {props.jogo != 'Favoritos' && <TiDelete onClick={props.aoDeletar} className='botao-deletar'/>}
            
             <div className='favoritar' onClick={() => props.favoritar(props.id)}> 
                {props.favorito ? <HiMiniHeart/> : <HiOutlineHeart/>}
             </div>
             <div className='card-jogador'>
            <div className='cabecalho' style={{backgroundColor: props.corCabecalho}}>
                <img src={props.imagem} alt='Foto do jogador'/>
            </div>
            <div className='rodape'>
                <h4> {props.nome}</h4>
                <h5>{props.descricao}</h5>
            </div>
            </div>

        </div>

    )
}
export default CardJogador

