import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";


import Movie from './components/Movie';

const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8e8290387f3d37808e589c36a59d55eb&page=1";

const Latest_API ="https://api.themoviedb.org/3/trending/all/day?api_key=8e8290387f3d37808e589c36a59d55eb";

function App(){
const [movies, setMovies] =useState([]);

useEffect(() =>{
  fetch(Featured_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  
},[]);
const handleOnClick1 = (e) => {
  e.preventDefault();
  fetch(Featured_API)
  .then((res) => res.json())
  .then((data) => {
    setMovies(data.results);
  });
};

const handleOnClick2 = (e) => {
  e.preventDefault();
  fetch(Latest_API)
  .then((res) => res.json())
  .then((data) => {
    setMovies(data.results);
  });
};

  return (
  <>
  <header>
  <button className="latest" onClick={handleOnClick1}>Popular</button>
  <button className="latest" onClick={handleOnClick2}>Latest</button>
  </header>
    <div className ="movie-container">
         {movies.length>0 && 
            movies.map((movie)=> <Movie key={movie.id}
           {...movie}/>)}

    </div>
    </>
  );
}

export default App;
