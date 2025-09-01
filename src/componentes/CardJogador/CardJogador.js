import './cardJogador.css'

const CardJogador = (props) =>
{
    return (
        <div className='jogador'>
            <div className='cabecalho'>
                <img src={props.imagem} alt='Foto  da Jogadora'/>
            </div>
            <div className='rodape'>
                <h4> {props.nome}</h4>
                <h5>Sempre quer fazer competição de cubo mágico (mas ninguém aceita) </h5>
            </div>

        </div>

    )
}

export default CardJogador

                // 'https://github.com/YasHirt.png'
