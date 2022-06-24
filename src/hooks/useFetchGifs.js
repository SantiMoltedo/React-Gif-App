import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react"

export const useFetchGifs = (categoria) => {
    const [gifs, setgifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifsData = async () => {
        const newGifsData = await getGifs(categoria)
        setgifs(newGifsData)
        setIsLoading(false)
    }

    useEffect(() => {
        getGifsData()
    }, [])

    return {
        gifs,
        isLoading
    }
}