import './Formulario.css'
import '../CampoTexto/CampoTexto'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';

    const jogos = [
        "Xadrez",
        "Damas",
        "Detetive",
        "Banco Imobiliário",
        "RPG",
        "Monopoly",
        "Baralho"

    ]

const Formulario = () => {

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log("Documento salvo")}
    return (
        <section className='section-login'>
            <form className='form-login' onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto label="Imagem"  placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Jogos" obrigatorio={true} itens={jogos} />
                <Botao>
                    Criar Botão
                </Botao>

            </form>
        </section>
    )
}

export default Formulario