import "./DetailsInfo.css"
import { FaClock } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaHourglass } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const DetailsInfo = ({ title, popularity, vote, overview, budget, genres, runtime }) => {
    return (
        <div className="details-info">
            <p><FaStar style={{color: "#ee150e"}}/> {title}</p>
            <div className="container-elements">
                <div className="element-info">Popularidade:  <FaEarthAfrica style={{color: "#ee150e"}}/> {popularity}</div>
                <div className="element-info">Voto:  <FaClipboardList style={{color: "#ee150e"}}/> {vote}</div>
                <div className="element-info">Orçamento:  <FaCreditCard style={{color: "#ee150e"}}/> ${budget}</div>

                <div className="element-info">Género:  <FaHourglass style={{color: "#ee150e"}}/> {genres} </div>
                <div className="element-info">Duração:  <FaClock style={{color: "#ee150e"}}/> {runtime}min</div>
            </div>
            <div className="overview">Descrição: {overview}</div>
        </div>
    )
}

export default DetailsInfo