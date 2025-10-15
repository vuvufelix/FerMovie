import { useEffect, useState} from "react"
import { useSearchParams } from "react-router-dom"
import CardList from "../components/CardList"
import Loading from "../components/Loading"
import ScrollReveal from 'scrollreveal'

const apiKEY = import.meta.env.VITE_API_KEY
const searchAPI = import.meta.env.VITE_SEARCH

const SearchResult = () => {
    const [searchParams] = useSearchParams()
    const [search, setSearch] = useState([])

    const query = searchParams.get("q")

    const searchMovie = async (movie) => {
        try {
            const response = await fetch(`${searchAPI}?api_key=${apiKEY}&query=${movie}`)
            const res = await response.json()
            setSearch(res.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        searchMovie(query)
    }, [query])

    useEffect(() => {
        ScrollReveal().reveal('h2', { 
            delay: 200,
            distance: '100rem', 
            duration: 1000, 
            easing: 'ease-in-out', 
            origin: 'left',  
            reset: false
        });
    }, [])

    return (
        <main className="main-container">
            {search.length === 0 && <Loading/>}
            <h2>Resultado da Pesquisa: <span style={{color: "#ee150e"}}>{query}</span></h2>
            <div className="film-container">
                {
                    search.map((result) => <CardList key={result.id} link={result.id} img={result.poster_path} title={result.title} rate={result.vote_average}/>)
                }
            </div>
        </main>
    )
}

export default SearchResult