import React from "react";
import Movie from './components/Movie';

const Featured_API = "";
const IMG_API = "https://image.tmdb.org/t/p/w500";
const SEARCH_API ="";

function App(){
const movies =['1','2','3'];

  return <div>
    {movies.map(movie =>(
      <Movie/>
    ))}
  </div>;
}

export default App;
