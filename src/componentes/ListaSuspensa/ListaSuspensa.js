import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select>
                <option></option>
                {props.itens.map(itens => <option key={itens}>{itens}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa