
import {API} from "../lib/Api.tsx";


export function Dashboard() {
    const Dash: React.FC = () => {

        const movies = API.getMovies()
        const genreList = API.getGenreList()

        return (

            <div className="custom-dash">
                <p>Dashboard</p>
                    {genreList.map((movie) => (
                        <p key={movie.id}>{movie.name}</p>))}
                <a href="/search"> search</a>
            </div>
        );
    };

    return <Dash></Dash>;
}