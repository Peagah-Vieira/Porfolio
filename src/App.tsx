import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from 'Pages/Home/Home';
import Projects from 'Pages/Projects';
import About from 'Pages/About';
import Resume from 'Pages/Resume';
import NavbarLayout from 'Layouts/NavbarLayout';
import FooterLayout from 'Layouts/FooterLayout';
import 'App.css';
import 'style.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
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
