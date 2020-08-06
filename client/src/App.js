import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';


const Movie(props) {
  return <h3>"This is the movie section"</h3>
}



const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <BrowserRouter>
        <link to= '/'>Movie List</link>
        <link to= '/movies/'>Movies</link>
        <link to= '/movies/2'>Movie 2</link>
        <link to= '/movies/3'>Movie 3</link>

        <Route exact pat ="/" component ={movieList}

        
      </BrowserRouter>

    </div>
  );
};

export default App;
