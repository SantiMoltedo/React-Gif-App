import { useState } from "react"

export const AddCategoria = ({ onNewCategory, actualCategorias }) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = (value) => {
        setinputValue(value)
    }

    const onSubmit = (evento) => {
        evento.preventDefault()
        console.log(typeof (inputValue));
        if (inputValue.trim().length < 1 || actualCategorias.includes(inputValue.trim()))
            return
        onNewCategory(inputValue.trim());
        setinputValue("")
    }

    return (
        <form role="form" onSubmit={(evento => onSubmit(evento))}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={({ target: { value } }) => onInputChange(value)}
            >
            </input>
        </form>
    )
}
