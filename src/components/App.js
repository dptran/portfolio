import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Services from './Services';
import Location from './Location';

function App() {
  return (
    <div className="wrapper">
      <h1>NIELSEN, ZEHE & ANTAS, P.C.</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/services">What We Do</Link></li>
            <li><Link to="/location">Where We Work</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
