import { useParams } from "react-router-dom";
import { API } from "../lib/Api";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import notFound from "../assets/image-not-found.svg"

import "./Movie.css";

const Movie = () => {

    const { id } = useParams();

    const dataMovie = API.getMovieId(id)


    //<MovieCard movie={dataMovie} showLink={false} />

    return (
        <div>
            <h2 className="title">Detalhes:</h2>
            {dataMovie && (
                <div className="movies-container">
                    <>
                        <div className="poster">
                            <img className="image-poster" src={dataMovie.poster_path ? API.getMovieImage(dataMovie.poster_path) : notFound} alt={dataMovie.original_title} />
                        </div>
                        <div className="info">
                            <div className="info-info">
                                <div id="dados">
                                    <p><h3><DescriptionOutlinedIcon /> Overview: </h3><p>{dataMovie.overview}</p> </p>
                                </div>
                                <div id="dados">
                                    <p><h3><TranslateOutlinedIcon /> Title: </h3><p>{dataMovie.original_title}</p> </p>
                                </div>
                                <div id="dados">
                                    <p><h3> Vote Average: </h3><p><StarOutlinedIcon />{ dataMovie.vote_average} </p> </p>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
            )}
        </div >
    );
}

export default Movie;