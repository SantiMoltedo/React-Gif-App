import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const categoria = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });


        render(<GifGrid categoria={categoria} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoria));

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });

        render(<GifGrid categriay={categoria} />);
        expect(screen.getAllByRole('img').length).toBe(2);



    });


});