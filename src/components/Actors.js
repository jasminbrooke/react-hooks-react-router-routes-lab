import React from "react";
import { actors } from "../data";

const actorList = actors.map((actor, index) => {
  return (
  <div key={index}>
  <h3>{actor.name}</h3>
  <ul>{actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
  </ul>
  </div>
)})

function Actors() {
  return (<div><h1>Actors Page</h1>
  {actorList}</div>)
}

export default Actors;
