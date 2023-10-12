import logo from "./HACCS_Logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Eboard from "./Pages/Eboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eboard" element={<Eboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
