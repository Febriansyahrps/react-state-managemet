import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Fast & furious',
            price: '$5',
            id: '0001'
        },
        {
            name: '2 Fast & 2 furious ',
            price: '$5',
            id: '0002'
        },
        {
            name: 'Fast & furious 3',
            price: '$5',
            id: '0003'
        },
        {
            name: 'Fast & furious Tokyo Drift',
            price: '$5',
            id: '0004'
        },
        {
            name: 'Fast 5',
            price: '$5',
            id: '0005'
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider