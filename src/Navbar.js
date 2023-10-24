import { Link } from "react-router-dom";
import main from "./App.css";
const NavBar = () => {
  return (
    <nav className="bullets">
      <span class="haccs">NJIT HACCS</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Events">Events</Link>
        </li>
        <li>
          <Link to="/Eboard">Meet Our E-board</Link>
        </li>
        <li>
          <Link to="/GetInvolved">Get Involved</Link>
        </li>
        <li>
          <Link to="/Contact Us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
