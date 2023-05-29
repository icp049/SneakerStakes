import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Shoes from './Shoes';
import Bet from './Bet';

const HomePage = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shoes">Sneakers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/bet" element={<bet />} />
      
       
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to the Home page!</h1>;
};



export default HomePage;
