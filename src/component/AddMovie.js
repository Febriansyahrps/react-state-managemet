import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext) 

    const updateName = e => {
        setName(e.target.value)
    }
    
    const updatePrice = e => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }

    return(
        <form className="form" onSubmit={addMovie}>
            <div className="inputform">
                <div>
                    <p>Movie Name</p>
                    <input type="text" name="name" value={name} onChange={updateName}></input>
                </div>
                <div>
                <p>Movie Price</p>
                <input type="text" name="price" value={price} onChange={updatePrice}></input>
                </div>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie