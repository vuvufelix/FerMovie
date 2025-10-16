import "./Header.css"
import { FaPlay } from "react-icons/fa6"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {

    const [text, setText] = useState("")
    const navigate = useNavigate()
    
    const movieName = (e) => {
        e.preventDefault()
        if(!text) return
        setText("")
        return navigate(`/search?q=${text}`)
    }

    const press = (e) => {
        if(e.code === "Enter") {
           movieName()
        }
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <h1> <FaPlay/> Fer<span>Movie</span></h1>
                </Link>
                <form onSubmit={movieName}>
                    <input 
                        onKeyUp={press}
                        placeholder="Pesquisar filme" 
                        type="text"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                    <button><FaMagnifyingGlass/></button>
                </form>
            </div>
        </header>
    )
}

export default Header