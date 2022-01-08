import React from 'react';
import './Home.css';
import { useState } from 'react';

const images = [
	{
		id: 0,
		source:
			'https://www.artic.edu/iiif/2/5d5e186e-0fa5-e016-7d42-502b1f0faf6b/full/843,/0/default.jpg',
		alt: 'Hartwell Memorial Window - 1917 Tiffany Studios',
	},
	{
		id: 1,
		source:
			'https://www.artic.edu/iiif/2/81b5faed-1b74-4689-ae83-50fcd5e8f32e/full/843,/0/default.jpg',
		alt: 'Zapata - 1930 Jose Celemente Orozco',
	},
	{
		id: 2,
		source:
			'https://www.artic.edu/iiif/2/29ce164c-ae91-8b2c-45b9-a47640a4fc26/full/843,/0/default.jpg',
		alt: 'untitled - 1978 Evenyln Statsinger',
	},
	{
		id: 3,
		source:
			'https://www.artic.edu/iiif/2/fdc1a755-ff86-487d-f16b-f03c40a30bee/full/843,/0/default.jpg',
		alt: 'Madam Pompadour - 1915 Amedeo Moddigliani',
	},
	{
		id: 4,
		source:
			'https://www.artic.edu/iiif/2/4d1b3ad0-14db-0d21-ad9f-17abb8bdfbb5/full/843,/0/default.jpg',
		alt: 'Bordighera - 1884 Clauda Monet',
	},
	{
		id: 5,
		source:
			'https://www.artic.edu/iiif/2/2d695bad-1205-6185-c3aa-3fd42210dbf9/full/843,/0/default.jpg',
		alt: "Cow's Skull with Calico Roses - 1931 Georgia O'Keeffe",
	},
	{
		id: 6,
		source:
			'https://www.artic.edu/iiif/2/ae5c4d0f-5ff0-1e5d-172c-a7c4e973d4e1/full/843,/0/default.jpg',
		alt: 'Nightlife - 1943 Archibald John Motley Jr.',
	},
	{
		id: 7,
		source:
			'https://www.artic.edu/iiif/2/b3974542-b9b4-7568-fc4b-966738f61d78/full/843,/0/default.jpg',
		alt: 'The Great Wave (Kanagawa) - 1830/33 Katsushika Hokusai',
	},
	{
		id: 8,
		source:
			'https://www.artic.edu/iiif/2/bc847c1e-b5c9-d933-8dad-9bd3d820b629/full/843,/0/default.jpg',
		alt: 'Creusa Pleads with Aeneas as He Leaves for War - 1803 Jean Michel Moreau',
	},
	{
		id: 9,
		source:
			'https://www.artic.edu/iiif/2/4b84da7c-1cf3-b70e-f6fe-f527aaf8da63/full/843,/0/default.jpg',
		alt: 'Waterloo Bridge - 1900 Timothy Cole',
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
					<div key={image.source}>
						{index === current && <p className='image-tag'>{image.alt}</p>}
						{index === current && (
							<img
								src={image.source}
								alt={image.alt}
								className='home-gallery-images'
							/>
						)}
						
					</div>
				);
			})}
			<div>
				<button onClick={prevSlide} className='home-btn-1 home-btn'>
					←
				</button>
				<button onClick={nextSlide} className='home-btn-2 home-btn'>
					→
				</button>
			</div>
		</div>
	);
}

export default Home;
