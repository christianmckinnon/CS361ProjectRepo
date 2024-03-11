// Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';


// Home, MyPortfolio, and Summary
import HomePage from './pages/HomePage';
import MyPortfolio from './pages/MyPortfolio';
import Summary from './pages/Summary';
import AboutHelp from './pages/AboutHelp';


// Define the function that renders the content in Routes, using State.
function App() {
  return (
    <>
      <BrowserRouter>
          {/* Place the header with Project Description */}
          
          <header>
            {/* Add the Stockachoo favicon here  */}
            <div class="header-container">
    <h1>
        <img src="android-chrome-192x192.png" alt="My favicon"/>$tockachoo
        <a href = "/about-help"><label className= "needHelp"> &nbsp;&nbsp;&nbsp; </label></a>
    </h1>
</div>
          </header>
          {/* Nav page layout tag */}
          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    {/* Check these for accuracy */}
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/my-portfolio" element = {<MyPortfolio/>}/>
                    <Route path="/about-help" element = {<AboutHelp />}/>
                    <Route path="/summary" element = {<Summary/>} />
                 
                    {/* Use these if your s`chema requires LONG data input: */}

                    
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