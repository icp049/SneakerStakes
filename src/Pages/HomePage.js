import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to the Home page!</h1>;
};

const About = () => {
  return <h1>About Us</h1>;
};

const Contact = () => {
  return <h1>Contact Us</h1>;
};

export default HomePage;
