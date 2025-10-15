import "./CardList.css"
import { FaStar } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom"

const CardList = ({img, title, rate, link}) => {

    const navigate = useNavigate()

    const getDetailsMovie = () => {
        if(!link) return 
        return navigate(`/details/${link}`)
    }
    return (
        <div className="card-list">
            <Link to={`/films/${link}`}><img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={title}/></Link>
            <div>{title}</div>
            <span><FaStar style={{color: "#ee150e"}}/> {rate}</span>
            <button onClick={getDetailsMovie}>Detalhes</button>
        </div>
    )
}

export default CardList