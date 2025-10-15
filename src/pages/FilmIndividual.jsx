import { useParams } from "react-router-dom"

const FilmIndividual = () => {

    const { key } = useParams()

    return (
        <main className="main-container">
            <div className="container-video">
            <iframe 
                src={`https://www.youtube.com/embed/${key}`} 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
            </div>
        </main>
    )
}

export default FilmIndividual