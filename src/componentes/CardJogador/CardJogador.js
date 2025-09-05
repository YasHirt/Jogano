import './cardJogador.css'
import { TiDelete } from "react-icons/ti";

const CardJogador = (props) =>
{
    //quando tiDelete for clicado, aoDeletar será executado
    return (
        <div className='jogador'>
            <TiDelete onClick={props.aoDeletar} className='botao-deletar'/>
            <div className='cabecalho' style={{backgroundColor: props.corCabecalho}}>
                <img src={props.imagem} alt='Foto  da Jogadora'/>
            </div>
            <div className='rodape'>
                <h4> {props.nome}</h4>
                <h5>{props.descricao}</h5>
            </div>

        </div>

    )
}

export default CardJogador

                // 'https://github.com/YasHirt.png'
