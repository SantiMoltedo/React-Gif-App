import { useState } from 'react'
import { AddCategoria } from './components'
import { GifGrid } from './components'

export const GifApp = () => {

    const [categorias, setCategorias] = useState(['Narutuo'])

    const onAddCategoria = (newCategoria) => {
        setCategorias([newCategoria, ...categorias])
    }

    return (
        <>
            <h1>Gifs</h1>
            <AddCategoria
                onNewCategory={(categoria) => onAddCategoria(categoria)}
                actualCategorias={categorias}
            />
            {categorias.map(categoria =>
            (
                <GifGrid key={categoria} categoria={categoria} />
            )
            )}
        </>
    )
}
