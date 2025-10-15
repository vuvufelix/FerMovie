import CardList from "../components/CardList"
import Loading from "../components/Loading"
import {useState, useEffect} from "react"

const movieURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY
const upComingURL = import.meta.env.VITE_PROXIMOS_ALANCAMENTOS

function Home() {

  const [films, setFilms] = useState([])
  const [upComing, setUpComing] = useState([])

  const getTopRatedMovies = async (url) => {
    try {
      const response = await fetch(url)
      const res =  await response.json()
      setFilms(res.results)
    } catch (error) {
      console.error(error)
    }
  }

  const upComingMovie = async(url) => {
    try {
      const response = await fetch(url)
      const res = await response.json()
      setUpComing(res.results)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const topRateURL = `${movieURL}top_rated?api_key=${apiKEY}`
    getTopRatedMovies(topRateURL)
  }, [])

  useEffect(() => {
    const upC = `${upComingURL}?api_key=${apiKEY}` 
    upComingMovie(upC)
  }, [])

  return (
    <main className="main-container">
      <h2>Melhores avaliados</h2>
      {films.length === 0 && upComing.length === 0 && <Loading/>}
      <div className="film-container">
        {
          films.map(film => <CardList key={film.id} link={film.id} img={film.poster_path} title={film.title} rate={film.vote_average}/>)
        }
      </div>
      <h2>Novos Lançamentos</h2>
      <div className="film-container">
        {
          upComing.map(upC => <CardList key={upC.id} link={upC.id} img={upC.poster_path} title={upC.title} rate={upC.vote_average} />)
        }
      </div>
    </main>
  )
}

export default Home
