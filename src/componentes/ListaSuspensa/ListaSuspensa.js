import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const AoClicar = (e) =>
    {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={AoClicar} required={props.obrigatorio}>
                <option></option>
                {props.itens.map(itens => <option key={itens}>{itens}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa