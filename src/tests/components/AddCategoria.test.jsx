import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategoria } from '../../components/AddCategoria';


describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategoria onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama')

    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama'
        const actualCategorias = []
        const onNewCategory = jest.fn()

        render(<AddCategoria onNewCategory={onNewCategory} actualCategorias={actualCategorias} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('no debe llamar onNewCategory: input está vacio', () => {

        const onNewCategory = jest.fn()
        render(<AddCategoria onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form')
        fireEvent.submit(form)
        screen.debug()
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})
