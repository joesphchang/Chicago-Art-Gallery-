import React from 'react';
import './Home.css';
import { useState } from 'react';

const images = [
	{
		id: 0,
		source:
			'https://www.artic.edu/iiif/2/ec1f6262-09c2-8f7e-baa9-9c0b267337ff/full/843,/0/default.jpg',
		alt: 'The Petit Creuse River',
	},
	{
		id: 1,
		source:
			'https://www.artic.edu/iiif/2/81b5faed-1b74-4689-ae83-50fcd5e8f32e/full/843,/0/default.jpg',
		alt: 'Zapata',
	},
	{
		id: 2,
		source:
			'https://www.artic.edu/iiif/2/29ce164c-ae91-8b2c-45b9-a47640a4fc26/full/843,/0/default.jpg',
		alt: 'untitled',
	},
	{
		id: 3,
		source:
			'https://www.artic.edu/iiif/2/fdc1a755-ff86-487d-f16b-f03c40a30bee/full/843,/0/default.jpg',
		alt: 'Madam Pompadour',
	},
	{
		id: 4,
		source:
			'https://www.artic.edu/iiif/2/4d1b3ad0-14db-0d21-ad9f-17abb8bdfbb5/full/843,/0/default.jpg',
        alt: 'Bordighera'
	},
];
function Home(props) {
	const [current, setCurrent] = useState(0);
	const length = images.length;

	function nextSlide() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	function prevSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	return (
		<div className='home-gallery'>
			{images.map((image, index) => {
				return (
					<>
						{index === current && (
							<img
								src={image.source}
								alt={image.alt}
                                key={index}
								className='home-gallery-images'
							/>
						)}
					</>
				);
			})}
            <div>
			<button onClick={prevSlide} className='home-btn'>←</button>
			<button onClick={nextSlide} className='home-btn'>→</button>
            </div>
		</div>
	);
}

export default Home;
