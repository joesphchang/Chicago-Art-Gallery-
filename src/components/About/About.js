import React from 'react';
import logo from '../assets/chicago-postcard.jpeg';
import './About.css';

function About(props) {
	return (
		<div className='about-container'>
			<h1>About Art Institute of Chicago</h1>
			<img src={logo} alt='Art Institute Of Chicago' />
			<p>
				The Art Institute of Chicago shares its singular collections with our
				city and the world. We collect, care for, and interpret works of art
				across time, cultures, geographies, and identities, centering the vision
				of artists and makers. We recognize that all art is made in a particular
				context, demanding continual, dynamic reconsideration in the present. We
				are a place of gathering; we foster the exchange of ideas and inspire an
				expansive, inclusive understanding of human creativity.
			</p>
			<a
				href='https://www.artic.edu/'
				target='_blank'>
				Visit Site
			</a>
		</div>
	);
}

export default About;
