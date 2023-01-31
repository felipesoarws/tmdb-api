import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";

const movieApiURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [budget, setBudget] = useState(0);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setBudget(data.budget);
    data.budget = data.budget.toLocaleString("en");
    data.vote_average = data.vote_average.toFixed(1);
    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${movieApiURL}${id}?${apiKey}`;

    getMovie(movieURL);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="movie-detailed-page">
        <div className="movie-detailed-page-poster">
          <img src={imageUrl + movie.poster_path} alt="Movie Poster" />
        </div>
        <div className="movie-detailed-page-details">
          <h1>{movie.title}</h1>
          <h2>{movie.tagline}</h2>
          <p>{movie.overview}</p>
          <h2>
            Bugdet: {budget > 0 && <span>$ {movie.budget}</span>}
            {budget < 1 && <span>Not divulgated.</span>}
          </h2>
          <p>
            <FaStar /> <span>{movie.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
