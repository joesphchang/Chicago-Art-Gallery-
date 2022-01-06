// Dependencies
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// Components
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Search from './components/Search/Search';
import GalleryDetails from './components/GalleryDetails/GalleryDetails';

// Style-sheets
import './App.css';

function App() {

  return (
    <div className="App">
     <nav className='main-navigation'>
      <Navigation />
     </nav>
     <main className='main-body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/gallerydetails/:id' element={<GalleryDetails /> } />
      </Routes>
     </main>
    </div>
  );
}

export default App;
