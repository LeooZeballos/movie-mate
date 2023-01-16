import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?apikey=861a176';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Harry Potter');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);

  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchValue);
    }
  }

  return (
    <div className="app">
      <h1>MovieMate</h1>
      <div className="search">
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyDownSearch} placeholder="Search for a movie..." />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="search-icon"
          onClick={() => searchMovies(searchValue)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map(movie => <MovieCard movie={movie} />)}
            </div>
        ) : (
          <div className="no-movies">
            <h2>No movies found</h2>
          </div>
      )}
    </div>
  );
}

export default App;