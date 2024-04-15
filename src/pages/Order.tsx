import { useParams } from "react-router-dom";
import { API } from "../lib/Api";

import "./BoxesStyle.css";
import MovieCard from "../components/movieCard/MovieCard";

const Order = () => {

    const { id } = useParams();
    const category = API.getGenreList()
    let movies = API.getMovies(null)

    const genre = category.find((e) => e.id == id)

    const matchGenres = movies.filter((movie) => {
        const genre_ids = movie.genre_ids

        const genreMatched = genre_ids.filter((g) => g == genre.id)

        return genreMatched.length ? true : false
    })

    console.log(matchGenres)


    return (
        <div>
            <h2 className="title">{genre?.name}</h2>
            <div className="movies-container">
                {matchGenres.map((movie) => (
                    movie ? <MovieCard key={movie.id} movie={movie} />: <h3>Não há filmes nessa categoria</h3>
                    ))}
            </div>
        </div>
    );

}

export default Order;