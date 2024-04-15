import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { API } from "../../lib/Api";

import "./MovieCard.css"
import notFound from "../../assets/image-not-found.svg"

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={ movie.poster_path ? API.getMovieImage(movie.poster_path) : notFound} alt={movie.original_title} />
            <h2>{movie.original_title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};

export default MovieCard;