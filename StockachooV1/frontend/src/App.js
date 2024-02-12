// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';

// Not sure whether this is necessary or not
import TravelJournal from './pages/TravelJournal';
import TravelsPage from './pages/TravelJournal';


// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
//import AddMoviePageForm from './pages/AddTravelPageForm';
//import EditMoviePageForm from './pages/EditTravelPageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditTravelPageTable from './pages/EditTravelPageTable';
import AddTravelPageTable from './pages/AddTravelPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [travel, setTravelToEdit] = useState([])

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
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddTravelPageTable />} /> 
                    <Route path="/update" element={<EditTravelPageTable travelToEdit={travel} />} />

                    
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