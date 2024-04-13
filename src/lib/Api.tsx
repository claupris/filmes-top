import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const moviesUrl = import.meta.env.VITE_API;
const moviesWeekUrl = import.meta.env.VITE_API_WEEK;
const apiKey = import.meta.env.VITE_API_KEY;
const movieSearch = import.meta.env.VITE_SEARCH;
const movieImage = import.meta.env.VITE_IMG;
const genreList = import.meta.env.VITE_API_GENRE

export const API = {
    getMovies: () => {

        const [moviesData, setMovieData] = useState([]);

        useEffect(() => {
            getCurrencyMoviesData(`${moviesUrl}popular?${apiKey}`)
            setTimeout(() => {
            }, 500);
        }, []);

        const getCurrencyMoviesData = async (url: RequestInfo | URL) => {
            const res = await fetch(url);
            const data = await res.json();
            setMovieData(data.results);
        };

        return moviesData;
    },

    getMovieWeek: () => {

        const [moviesWeekData, setWeekMovieData] = useState([]);

        useEffect(() => {
            getCurrencyMoviesWeekData(`${moviesWeekUrl}?${apiKey}`)
            setTimeout(() => {
            }, 500);
        }, []);


        const getCurrencyMoviesWeekData = async (url: RequestInfo | URL) => {
            const res = await fetch(url);
            const data = await res.json();
            setWeekMovieData(data.results);
        };

        return moviesWeekData;
    },

    getMovieTopRated: () => {

        const [moviesTopRated, setTopRated] = useState([]);

        useEffect(() => {
            getTopRatedData(`${moviesUrl}top_rated?${apiKey}`)
            setTimeout(() => {
            }, 500);
        }, []);

        const getTopRatedData = async (url: RequestInfo | URL) => {
            const res = await fetch(url);
            const data = await res.json();
            setTopRated(data.results);
        };

        return moviesTopRated;

    },

    getMovieUpComing: () => {

        const [moviesUpComing, setUpComing] = useState([]);

        useEffect(() => {
            getUpComingData(`${moviesUrl}upcoming?${apiKey}`)
            setTimeout(() => {
            }, 500);
        }, []);

        const getUpComingData = async (url: RequestInfo | URL) => {
            const res = await fetch(url);
            const data = await res.json();
            setUpComing(data.results);
        };

        return moviesUpComing;
    },

    getMovieImage: (img: string) => {
        return movieImage + img;
    },

    getGenreList: () =>{
        const [moviesGenreList, setmoviesGenreList] = useState([]);

        useEffect(() => {
            getGenreListData(`${genreList}?${apiKey}`)
            setTimeout(() => {
            }, 500);
        }, []);

        const getGenreListData = async (url: RequestInfo | URL) => {
            const res = await fetch(url);
            const data = await res.json();
            setmoviesGenreList(data.genres);
        };

        return moviesGenreList;
    },

    searchMovie: () => {
        const [searchParams] = useSearchParams();

        const [movies, setMovies] = useState([]);
        const query = searchParams.get("q");
      
        useEffect(() => {
          const searchWithQueryURL = `${movieSearch}?${apiKey}&query=${query}`;
          getSearchedMovies(searchWithQueryURL);
        }, [query]);
      
        const getSearchedMovies = async (url: RequestInfo | URL) => {
          const res = await fetch(url);
          const data = await res.json();
          setMovies(data.results);
        };

        return movies;
    }

}