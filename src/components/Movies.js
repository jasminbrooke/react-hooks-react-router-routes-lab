import React from "react";
import { movies } from "../data";

const movieList = movies.map((movie, index) => {
  return (
  <div key={index}>
    <h3>{movie.title}</h3>
    <p>{movie.time}</p>
    <ul>{movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}</ul>
  </div>
  )})


function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
