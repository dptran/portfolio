import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Portfolio from './Portfolio';
import CV from './CV';
import Home from './Home';
import Contact from './Contact';
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
          <a class="navbar-brand" href="/">DARREN P. TRAN</a>
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
            <a class="nav-link" href="/about">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">PORTFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cv">CV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">CONTACT</a>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }
