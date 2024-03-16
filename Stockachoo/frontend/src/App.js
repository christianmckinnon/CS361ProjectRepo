// App.js is our driver that imports
// Import dependencies: React, BrowserRouter, Routes, Route, Navigation and Styles from App.css
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

// Import the Home, MyPortfolio, Summary and AboutHelp pages
import HomePage from './pages/HomePage';
import MyPortfolio from './pages/MyPortfolio';
import Summary from './pages/Summary';
import AboutHelp from './pages/AboutHelp';

// Define the function that renders the content in Routes, using State
function App() {
  return (
    <>
      <BrowserRouter>          
          <header>
            {/* Add the Stockachoo favicon here  */}
            <div class="header-container">
    <h1>
        <img src="android-chrome-192x192.png" alt="My favicon"/>$tockachoo
        <a href = "/about-help"><label className= "needHelp"> &nbsp;&nbsp;&nbsp; </label></a>
    </h1>
</div>
          </header>
          <Navigation/>
          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, My Portfolio, About Help, Contact, and Summary Pages.  */}
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/my-portfolio" element = {<MyPortfolio/>}/>
                    <Route path="/about-help" element = {<AboutHelp />}/>
                    <Route path="/summary" element = {<Summary/>} />    
                </Routes>
              </section>
          </main>
          <footer>
            <p>&copy; 2024 Christian McKinnon</p>
          </footer>
      </BrowserRouter>
    </>
  );
}

export default App;