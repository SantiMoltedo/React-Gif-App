import { GifCard } from "./GifCard"
import { useFetchGifs } from "../hooks/useFetchGifs.js"

export const GifGrid = ({ categoria }) => {
    // const [gifs, setgifs] = useState([])

    // const getGifsData = async () => {
    //     const newGifsData = await getGifs(categoria)
    //     setgifs(newGifsData)
    // }

    // useEffect(() => {
    //     getGifsData()
    // }, [])

    const { gifs, isLoading } = useFetchGifs(categoria)

    return (
        <div className="card-grid">
            <h3>{categoria}</h3>
            {isLoading && (<h2>Cargando...</h2>)}
            {gifs.map(gif =>
                <GifCard key={gif.id} gif={gif} />
            )
            }
        </div >
    )
}
