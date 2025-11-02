import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import DetailsInfo from "../components/DetailsInfo"
import Loading from "../components/Loading"
import ScrollReveal from 'scrollreveal'

const detailFilmAPI = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Details = () => {

    const [detail, setDetail] = useState([])
    const [genres, setGenres] = useState()

    const { id } = useParams()

    const detailFilm = async (idMovie) => {
        try {
            const response = await fetch(`${detailFilmAPI}${idMovie}?api_key=${apiKEY}`)
            const res = await response.json()
            setGenres(res.genres[0].name)
            setDetail(res)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        detailFilm(id)
    }, [id])

    useEffect(() => {
        ScrollReveal().reveal('.element-info', { 
            delay: 200,
            distance: '80%',
            duration: 1000, 
            easing: 'ease-in-out',
            origin: 'left',
            reset: false,
            interval: 400
        })

    }, [])

    return (
        <main className="main-container">
            {detail.length === 0 && <Loading/>}
            <div className="details-container">
                <img style={{borderRadius: "0.5rem", filter: "drop-shadow(0 0.3rem 0.6rem #ee150e71)"}} src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title}/>
                <DetailsInfo 
                    title={detail.title}
                    popularity={detail.popularity}
                    vote={detail.vote_average}
                    overview={detail.overview}
                    budget={detail.budget}
                    genres={genres}
                    runtime={detail.runtime}
                />
            </div>
        </main>
    )
}

export default Details