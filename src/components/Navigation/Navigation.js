import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/chicago-art-logo.png';
import './Navigation.css';

function Navigation(props) {
	return (
		<header className='header'>
			<Link to='/'>
				<img src={logo} alt='chicago-art-institute' className='image' />
			</Link>
			<nav className='nav-bar'>
				<span className='nav-main-link'>
					<Link to='/'>Home</Link>
				</span>
				<span className='nav-main-link'>
					<Link to='/gallery'>Gallery</Link>
				</span>
				<span className='nav-main-link'>
					<Link to='/about'>About</Link>
				</span>
				<span className='nav-main-link'>
					<Link to='/search'>Search</Link>
				</span>
			</nav>
		</header>
	);
}

export default Navigation;
