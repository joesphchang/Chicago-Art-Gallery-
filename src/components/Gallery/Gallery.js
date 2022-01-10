import React from 'react';
import './Gallery.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Gallery(props) {
	const { galleryIds, setGalleryIds } = props;
	const [galleryImages, setGalleryImages] = useState([]);

	useEffect(() => {
		const url = 'https://api.artic.edu/api/v1/artworks';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setGalleryImages(res.data);
				setGalleryIds(
					res.data.map((ele) => {
						return ele.id;
					})
				);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<section className='gallery-container'>
				{galleryImages
					.filter((element) => {
						return element.image_id;
					})
					.map((gallery) => {
						return (
							<Link to={`details/${gallery.id}`} key={gallery.id} className='gallery-card'>
								<div className='main-gallery-card'>
									<div className='card-image' style={{ backgroundImage: `url(https://www.artic.edu/iiif/2/${gallery.image_id}/full/843,/0/default.jpg)` }} >
										{/* <img
											src={`https://www.artic.edu/iiif/2/${gallery.image_id}/full/843,/0/default.jpg`}
											alt={gallery.alt_title}
											className='image'
										/> */}
									</div>
									<div className='card-title'>
										<h3>
											Title:{' '}
											<span className='gallery-text'>{gallery.title}</span>
										</h3>{' '}
										<h3>
											Artist:{' '}
											<span className='gallery-text'>
												{gallery.artist_title
													? gallery.artist_title
													: 'Not Found'}
											</span>
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
