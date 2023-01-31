import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  let [moviesByRating, setmoviesByRating] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
    setmoviesByRating(data.results);
  };

  moviesByRating.sort(function (a, b) {
    if (a.vote_average < b.vote_average) return 1;
    if (a.vote_average > b.vote_average) return -1;
    return 0;
  });

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title results">
          Movie Results to: <span>{query}</span>
        </h1>
        <div className="movies-container">
          {moviesByRating.length === 0 && (
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
          {moviesByRating.length > 0 &&
            moviesByRating.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
