import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Conditionally render the navigation based on the current path
  if (location.pathname === '/' || location.pathname === '/HomePage') {
    return null; // Render nothing if the path is the homepage or login page
  }

  return (
    <nav>
        <Link to= "/topics-page">My Portfolio</Link>
        <Link to= "/travel-journal">About</Link>  
        <Link to= "/">Logout</Link>
      </nav>
  );
}

export default Navigation;
