import "./Jogo.css"

const Jogo = (props) =>
{
    return (

        <section className="sectionJogo" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
        </section>
    )
}

export default Jogo