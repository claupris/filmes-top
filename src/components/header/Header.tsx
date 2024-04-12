
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const Header = () =>{
    return (
        <header
          style={{
            backgroundColor: "#f4900c",
            justifyContent: "space-between"
          }}
        >
          <nav>
            <ul style={{ listStyleType: "none", padding: 2 }}>
              <li style={{ display: "inline", margin: "0 20px" }}>
                <a
                  href="/dashboard"
                  style={{ textDecoration: "none", color: "white", fontSize: "19px" }}
                >
                  <BiCameraMovie /> Dashboard
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 20px" }}>
                <form style={{ textDecoration: "none", color: "white", fontSize: "19px" }}>
                    <input type='text' placeholder='Busca'/>
                    <button type='submit'><BiSearchAlt2 /></button>
                </form>
              </li>
              <li style={{ display: "inline", margin: "0 20px" }} role="menuitem">
              </li>
            </ul>
          </nav>
        </header>
      ); 
    };
    export default Header;