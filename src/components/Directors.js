import React from "react";
import { directors } from "../data";

const directorList = directors.map((director, index) => {
  return (
  <div key={index}>
  <h3>{director.name}</h3>
  <ul>{director.movies.map((movie, i) => <li key={i}>{movie}</li>)}
  </ul>
  </div>
)})

function Directors() {
  return (<div><h1>Directors Page</h1>
  {directorList}</div>)
}

export default Directors;
