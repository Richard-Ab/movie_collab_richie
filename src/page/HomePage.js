import React from 'react'
import MovieList from '../component/MovieList'

const HomePage = () => {
  return (
    <div>
  
      <h1>Trending</h1>
      <MovieList/>
      <h1>Top Rated</h1>
      <MovieList />
      <h1>Drama</h1>
      <MovieList />
      <h1>Action</h1>
      <MovieList/>
    </div>
  )
}

export default HomePage
