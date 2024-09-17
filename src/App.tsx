import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from 'Pages/Home/Home';
import Projects from 'Pages/Projects';
import About from 'Pages/About/About';
import Resume from 'Pages/Resume/Resume';
import NavbarLayout from 'Layouts/Navbar/NavbarLayout';
import FooterLayout from 'Layouts/Footer/FooterLayout';
import 'App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from 'Components/Preloader';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavbarLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <FooterLayout />
      </div>
    </Router>
  );
}

export default App;
