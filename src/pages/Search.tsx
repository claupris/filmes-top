import React from "react"
import { Link } from "react-router-dom";

export function Search(){
    const Search: React.FC = () => {
        return (
            <div>
            <p>Search</p>

            <Link to="/movie/1">movie</Link>
            </div>
        );
    };

    return <Search></Search>;
}