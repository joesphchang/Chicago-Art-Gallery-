import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Gallery(props) {
	const [galleryImages, setGalleryImages] = useState([]);
   
	useEffect(() => {
		const url = 'https://api.artic.edu/api/v1/artworks';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setGalleryImages(res.data); 
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
      
	return (
		<div>
			<section className='gallery-container'>
				{galleryImages.map((gallery) => {
					return (
						<Link to={`details/${gallery.id}`} key={gallery.id}>
							<div className='main-gallery-card'>
								<div className='card-image'>
									<img
										src={`https://www.artic.edu/iiif/2/${gallery.image_id}/full/843,/0/default.jpg`}
										alt={gallery.alt_title}
									/>
								</div>
								<div className='card-title'>
									<h2>
										Title: <span>{gallery.title}</span>
									</h2>{' '}
									<h3>
										Artist: <span>{gallery.artist_title}</span>
									</h3>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
		</div>
	);
}

export default Gallery;
