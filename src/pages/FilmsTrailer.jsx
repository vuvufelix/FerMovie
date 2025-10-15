import { Link, useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import Loading from "../components/Loading"
import ScrollReveal from 'scrollreveal'

const apiKEY = import.meta.env.VITE_API_KEY
const videoURL = import.meta.env.VITE_API_VIDEO

const FilmsTrailer = () => {

    const [videos, setVideos] = useState([])
    const [oneVideo, SetOneVideo] = useState([])

    const { id } = useParams()

    const movieVideos = async (id) => {
        try {
            const response = await fetch(`${videoURL}/${id}/videos?api_key=${apiKEY}`)
            const res = await response.json()
            setVideos(res.results)
        } catch (error) {
            console.error(error)
        }
    } 

    useEffect(() => {
        movieVideos(id)
        console.log(oneVideo)
    }, [id])

    useEffect(() => {
        ScrollReveal().reveal('h2', {  
            delay: 200 ,
            distance: '100rem',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'left',
            reset: false  
        });
    }, [])

    return (
        <main className="main-container">
            <h2>Veja os melhores Trailers</h2>
            {videos.length === 0 && <Loading/>}
            <div className="film-container">
                {videos.map(video => (
                    <div className="film-card">
                        <iframe  
                            src={`https://www.youtube.com/embed/${video.key}`} 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <Link to={`/video/${video.key}`}>Ver Melhor</Link>
                    </div>
                    ))
                }
            </div>
                    
        </main>
    )
}

export default FilmsTrailer