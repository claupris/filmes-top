import React from "react"
import { Link } from "react-router-dom";

export function Movie(){
    const Movie: React.FC = () => {
        return (
            <div>
            <p>Movie</p>

            <Link to="/">dash</Link>
            </div>
        );
    };

    return <Movie></Movie>;
}