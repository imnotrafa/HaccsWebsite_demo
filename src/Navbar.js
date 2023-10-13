import { Link } from "react-router-dom";
import main from './App.css'
const NavBar = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/Eboard">Eboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
