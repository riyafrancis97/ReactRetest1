import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const NavBar = () => (
  
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/about'>About Us</Link></li>
      </ul>
    </nav>
);

export default NavBar;
