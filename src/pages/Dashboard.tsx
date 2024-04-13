
import { Link } from "react-router-dom";
import {API} from "../lib/Api.tsx";
import MovieCard from "../components/movieCard/MovieCard.tsx";


export function Dashboard() {
    const Dash: React.FC = () => {

        const movies = API.getMovies()


        return (

            <div className="custom-dash">
                <p>Dashboard</p>
                    {movies.map((movie) => (
                       <MovieCard key={movie.id} movie={movie} />))}
            <Link to="/search">search</Link>
            </div>
        );
    };

    return <Dash></Dash>;
}