import './Formulario.css'
import '../CampoTexto/CampoTexto'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { use, useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('') //hooks
    const [imagem, setImagem] = useState('')
    const [lista, setLista] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({ nome, imagem, lista, descricao, id: Date.now() }) //envio um objeto literal JS
        setImagem('')
        setLista('')
        setNome('')
        setDescricao('')
    }

//O evento é passado automáticcamente como parâmetro para aoSalvar porque é uma função callback de evento
    return (
        <section className='section-login'>
            <form className='form-login' onSubmit={aoSalvar} > 
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto valor={nome} aoAlterado={setNome} label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto valor={descricao} aoAlterado={setDescricao} label="Descrição" placeholder="Conte um pouco sobre você"/>
                <CampoTexto valor={imagem} aoAlterado={setImagem} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={lista} aoAlterado={setLista} label="Jogos" obrigatorio={true} itens={props.listaDeJogos} />
                <Botao>
                    Criar card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario