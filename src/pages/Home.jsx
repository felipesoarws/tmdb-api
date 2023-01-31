import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <h1 className="title">Top Rated Movies</h1>
        <div className="movies-container">
          {topMovies.length === 0 && (
            <div class="loadingio-spinner-spinner-4y890qhiy6p">
              <div class="ldio-4klb7d1hx95">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          {topMovies.length > 0 &&
            topMovies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
