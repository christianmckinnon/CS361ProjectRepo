// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';


// Home, TopicsPage, and Summary
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import Summary from './pages/Summary';

// Not sure whether this is necessary or not
import TravelsPage from './pages/TravelJournal';



// Define the function that renders the content in Routes, using State.
function App() {

  const [travel, setTravelToEdit] = useState([])

  if (!travel) {
    // If travel is falsy, you can log an error message or take any other action
    console.error('Travel is falsy!');
    // You can add more actions here if needed
  }
  return (
    <>
      <BrowserRouter>
          {/* Place the header with Project Description */}
          
          <header>
            {/* Add the Stockachoo favicon here  */}
            <div class="header-container">
    <h1>
        <img src="android-chrome-192x192.png" alt="My favicon"/>$tockachoo
        <a href = "/travel-journal"><label className= "needHelp"> &nbsp;&nbsp;&nbsp; </label></a>
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
                    <Route path="/" element={<HomePage />} />  {/*setTravel={setTravelToEdit}*/}
                    <Route path="/topics-page" element = {<TopicsPage/>}/>
                    <Route path="/travel-journal" element = {<TravelsPage setTravel={setTravelToEdit} />}/>
                    <Route path="/summary" element = {<Summary/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}

                    
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