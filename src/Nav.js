import React, {useContext} from 'react'
import { MovieContext } from './component/MovieContext'

const Nav = () => {

     const [movies, setMovies] = useContext(MovieContext)

    return(
        <div className="nav">
            <h3>Movie Catalogue</h3>
            <p><b>List of Movies </b> : {movies.length} movies</p>
        </div>
    )
}

export default Nav