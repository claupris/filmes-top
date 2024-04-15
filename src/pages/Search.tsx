
import { API } from "../lib/Api";
import MovieCard from "../components/movieCard/MovieCard";
import { useSearchParams } from "react-router-dom";




const Search = () => {


    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    const movies = API.searchMovie()
    
    return (
        <div className="container">
            <h2 className="title">Resultados para {query.toUpperCase()}:</h2>
            <div className="movies-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />))}
            </div>
        </div>
    );
}

export default Search;