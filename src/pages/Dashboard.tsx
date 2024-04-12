import React, { useEffect, useState } from "react"
import { MovieProps } from "../utils/movie.props";
import axios from "axios";


interface Movies {
    id: MovieProps["id"];
    titulo: MovieProps["title"];
    descricao: MovieProps["overview"];
    poster: MovieProps["poster_path"];
    genero: MovieProps["media_type"];
}

const moviesUrl = import.meta.env.VITE_API;
const moviesWeekUrl = import.meta.env.VITE_API_WEEK;
const apiKey = import.meta.env.VITE_API_KEY;

export function Dashboard() {
    const Dash: React.FC = () => {
        const [moviesData, setMovieData] = useState<Movies[]>([]);
        const [moviesWeekData, setWeekMovieData] = useState<Movies[]>([]);
        const [maxTableSize, setMaxTableSize] = useState(0);

        useEffect(() => {
            getCurrencyMoviesData();
            getCurrencyMoviesWeekData();
            console.log(moviesWeekData)
            console.log(moviesData)

            setTimeout(() => {
                setMaxTableSize(10);
            }, 500);
        }, []);


        const getCurrencyMoviesData = async () => {
            try {
                axios
                    .get(`${moviesUrl}popular?${apiKey}`)
                    .then((response) => {
                        setMovieData(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar dados da API:", error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        const getCurrencyMoviesWeekData = async () => {
            try {
                axios
                    .get(`${moviesWeekUrl}?${apiKey}`)
                    .then((response) => {
                        setWeekMovieData(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar dados da API:", error);
                    });
            } catch (error) {
                console.error(error);
            }
        };


        return (

            <div className="custom-dash">
                <p>Dashboard</p>


                <a href="/search"> search</a>
            </div>
        );
    };

    return <Dash></Dash>;
}