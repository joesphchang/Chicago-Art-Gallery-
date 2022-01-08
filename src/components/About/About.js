import React from 'react';
import logo from '../assets/chicago-postcard.jpeg';
import './About.css';

function About(props) {
	// Reference on opening a new window
	// https://developer.mozilla.org/en-US/docs/Web/API/Window/open
	function handleClick() {
		window.open('https://www.artic.edu/');
	}

	return (
		<div className='about-container'>
			<h1 className='about-title'>About Art Institute of Chicago</h1>
			<img src={logo} alt='Art Institute Of Chicago' className='about-image' />
			<p className='about-text'>
				The Art Institute of Chicago was founded as both a museum and school for
				the fine arts in 1879, a critical era in the history of Chicago as civic
				energies were devoted to rebuilding the metropolis that had been
				destroyed by the Great Fire of 1871. The Art Institute found its
				permanent home in 1893, when it moved into a building constructed on
				what is recognized today as the traditional homelands of the Council of
				Three Fires—the Ojibwe, Odawa, and Potawatomi peoples. Built jointly
				with the city of Chicago for the World’s Columbian Exposition at the
				intersection of Michigan Avenue and Adams Street, that building—its
				entry flanked by the two famous bronze lions—remains the “front door” of
				the museum even today. In keeping with the academic origins of the
				institution, a research library was constructed in 1901; eight major
				expansions for gallery and administrative space have followed, with the
				latest being the Modern Wing, which opened in 2009. The permanent
				collection has grown from plaster casts to nearly 300,000 works of art
				in fields ranging from Chinese bronzes to contemporary design and from
				textiles to installation art. Together, the School of the Art Institute
				of Chicago and the museum of the Art Institute of Chicago are now
				nternationally recognized as two of the leading fine-arts institutions
				in the United States.
			</p>
			<a
				onClick={() => handleClick('https://www.artic.edu/')}
				target='_blank'
				className='about-link'>
				Visit Site
			</a>
		</div>
	);
}

export default About;
