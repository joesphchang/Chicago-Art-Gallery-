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
import SearchResults from './components/Search/SearchResults';
import Logo from './components/assets/chicago-art-logo.png';

// Style-sheets
import './App.css';

function App() {
	return (
		<div className='App'>
			<nav className='main-navigation'>
				<Navigation />
			</nav>
			<main className='main-body'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/about' element={<About />} />
					<Route path='/search' element={<Search />} />
					<Route path='/search/details/:id' element={<SearchResults />} />
					<Route path='/gallery/details/:id' element={<GalleryDetails />} />
				</Routes>
			</main>
			<footer className='footer'>
				<h4>Website by Joey Chang</h4>
				<div className='footer-image'>
					<img src={Logo} alt='chicago-art-institute' className='image' />
				</div>
				<a href='https://www.linkedin.com/in/joesphchang/'>LinkedIn</a>
			</footer>
		</div>
	);
}

export default App;
