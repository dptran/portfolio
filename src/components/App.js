import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Services from './Services';
import Location from './Location';
import Index from './Index';
import Contact from './Contact';
import Attorneys from './Attorneys';
import { useAuth } from '../context/AuthContext' 

export const App = () => {
  const { currentUser, signIn, logOut } = useAuth();
  const handleLogin = () => {
    signIn();
  }
  const handleLogout = () => {
    logOut();
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg container-md navbar-light bg-light">
          <a class="navbar-brand" href="/">NIELSEN, ZEHE & ANTAS, P.C.</a>
        <form class="container-fluid justify-content-end">
          {
            !currentUser.loggedIn
                ?
              <li className="nav-item">
                  <Link onClick={handleLogin} to="." className="nav-link">Login</Link>
              </li>

                :
              <li className="nav-item">
                  <Link onClick={handleLogout} to="." className="nav-link">Logout</Link>
              </li>
          }
        </form>
      </nav>
        <ul class="nav justify-content-center border bg-light">
          <li class="nav-item">
            <a class="nav-link" href="/about">WHO WE ARE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">WHAT WE DO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">NEWS & EVENTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/location">WHERE WE WORK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">CONTACT US</a>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/attorneys" element={<Attorneys />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }
