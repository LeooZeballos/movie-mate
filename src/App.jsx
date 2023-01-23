import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Nav from "./Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/movie-mate" element={ <Home/> } />
        <Route path="/movie-mate/movie/:movieId" element={ <Movie /> } />
      </Routes>
    </div>
  );
};

export default App;
