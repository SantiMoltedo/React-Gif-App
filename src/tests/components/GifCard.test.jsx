import { render } from '@testing-library/react'
import { GifCard } from '../../components/GifCard'

describe('Pruebas en componente GifCard', () => {
    const title = 'Naruto'
    const url = 'Naruto'
    const gif = {
        title,
        url,
        id: 0,
    }
    test('Matchear con snapshot', () => {
        const { container } = render(<GifCard gif={gif} />)

        expect(container).toMatchSnapshot();
    })
})