import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (
    <Link to={`/movie-mate/movie/${movie.imdbID}`} className="movie-card">
      <div>
        <span>{movie.Year}</span>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </Link>
  );

}

export default MovieCard;