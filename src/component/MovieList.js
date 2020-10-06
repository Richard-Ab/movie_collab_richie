import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './movie__list.css'

function MovieList() {

    useEffect(() => {
        getMovies()
    }, [])
  

    const URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=95c19b789a834a78dbc71429b0c94dd1'


    // creating state
    const [trendingMovies, setTrendingMovies] = useState([])



    //fetch the movies from the movie db
    const getMovies = async () => {
        const response = await axios.get(URL)
        setTrendingMovies(response.data.results)
    }



    return (
        <div>
        <h1>Movie List</h1>
            <div className='movie__list'>
            {trendingMovies.map((movie) => {
                return (
                    <div>
                        <img id='movie__image' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="broken img"/>
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <p>{movie.overview}</p> 
                    </div>
            )
        })}
            </div>
        </div>
    )
}

export default MovieList
