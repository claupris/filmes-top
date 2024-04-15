
import { API } from "../lib/Api.tsx";
import MovieCard from "../components/movieCard/MovieCard.tsx";


import "./BoxesStyle.css";


const Dashboard = () => {

    const movies = API.getMovies(null);
    const moviesUpComing = API.getMovieUpComing();
    const topMovies = API.getMovieTopRated();


    return (
        <div>
            <div className="container">
                <div className="movies-container">
                    <div className="title-cot"> <h1>TOP MOVIES</h1></div>
                    {moviesUpComing.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="movies-container">
                    <div className="title-cot"> <h1>UP COMING</h1></div>
                    {topMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="container">

                <div className="movies-container">
                    <div className="title-cot"> <h1>ALL MOVIES</h1></div>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

        </div>

    );

};


export default Dashboard;