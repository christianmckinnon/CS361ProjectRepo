/* Stockachoo Portfolio Project for CS361
Christian McKinnon
3/16/2024
Professor Letaw

Code adapted from CS 290 Web Development Portfolio Project by Professor Van Londen
Citation: OSU Canvas: Assignment 8 ~ Portfolio Frontend (Full Stack MERN)
https://canvas.oregonstate.edu/courses/1933705/assignments/9345092
*/

// Navigation.js is used to route our Navigation Links: My Portfolio, About and Logout

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Conditionally render the navigation based on the current path
  if (location.pathname === '/' || location.pathname === '/HomePage') {
    return null; // Render nothing if the path is the homepage or login page
  }

  // Links to the My Portfolio, About, and Logout Pages
  return (
    <nav>
        <Link to= "/my-portfolio">My Portfolio</Link>
        <Link to= "/about-help">About</Link>  
        <Link to= "/">Logout</Link>
      </nav>
  );
}

export default Navigation;
