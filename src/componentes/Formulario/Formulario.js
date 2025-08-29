import './Formulario.css'
import '../CampoTexto/CampoTexto'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { use, useState } from 'react';

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

    const [nome, setNome] = useState('') //hooks
    const [imagem, setImagem] = useState('')
    const [lista, setLista] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log("Documento salvo =>", nome, imagem, lista)
    }
    

    return (
        <section className='section-login'>
            <form className='form-login' onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto valor={nome} aoAlterado={setNome} label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto valor={imagem} aoAlterado= {setImagem} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={lista} aoAlterado={setLista} label="Jogos" obrigatorio={true} itens={jogos} />
                <Botao>
                    Criar Botão
                </Botao>

            </form>
        </section>
    )
}

export default Formulario