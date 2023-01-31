import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt="Movie Poster" />
      <div className="movie-title-rating">
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
      </div>

      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
