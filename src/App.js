import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Eboard from "./Pages/Eboard";
import main from "./App.css";
import Footer from "./footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/eboard" element={<Eboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
