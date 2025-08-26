import './Formulario.css'
import '../CampoTexto/CampoTexto'
import CampoTexto from '../CampoTexto/CampoTexto';
const Formulario = () => {
    return (
        <section className='section-login'>
            <form className='form-login'>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Jogo" placeholder="Qual jogo você deseja jogar?" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />

            </form>
        </section>
    )
}

export default Formulario