<<<<<<< Updated upstream
import './App.css';
import logo from './hacsslogo.png';
=======
import logo from "./HACCS_Logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Eboard from "./Pages/Eboard";
import "./App.css";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< Updated upstream
        <p>
          Welcome to HACCS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets learn together
        </a>
      </header>
    </div>
=======
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eboard" element={<Eboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
