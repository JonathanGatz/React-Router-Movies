import React from 'react';
import {Link} from 'react-router-dom'

const SavedList = props => (
  
  <div className="saved-list">
    <dv className="nav-links">    
    <h3>Saved Movies:</h3>
    <Link to='/movies/'>Saved Movies</Link>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}</dv>
    <dv className="nav-links">
    <div className="home-button">Home</div>
    <Link to='/'>Home</Link>
    </dv>
  </div>
);

export default SavedList;

{/* <BrowserRouter>
        <link to= '/'>test</link>
        <link to= '/movies/'>Movies</link>
        <link to= '/movies/2'>Movie 2</link>
        <link to= '/movies/3'>Movie 3</link>

        <Route exact path ="/" component ={test}/>

      </BrowserRouter> */}