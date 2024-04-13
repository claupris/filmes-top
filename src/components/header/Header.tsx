
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { BrowserRouter } from 'react-router-dom';

import "./Header.css"

const Header = () =>{
    const search =  () =>{
        return console.log("deu certo")
    }

    return (
        <nav id="navbar">
          <h2>
            <BrowserRouter>
              <BiCameraMovie /> Top Movies
            </BrowserRouter>
          </h2>
          <form onSubmit={search}>
            <input
              type="text"
              placeholder="Busque um filme"
              onChange={() => ""}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </nav>
      ); 
    };
    export default Header;