import React from 'react';
import './Search.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SearchResults(props) {
	const { images } = props;

	if (!images) {
		return <div>No Images Found</div>;
	}

	return (
		<div className='gallery-container'>
			{images.map((image) => {
				return (
					<Link to={`/gallery/details/${image.data.id}`} key={image.id}>
						<div className='main-gallery-card'>
							<img
								src={
									image.data &&
									`https://www.artic.edu/iiif/2/${image.data.image_id}/full/350,/0/default.jpg`
								}
								alt={image.data.title}
								key={image.data.id}
							/>
							<div className='card-title'>
								<h3>
									Title:{' '}
									<span className='gallery-text'>{image.data.title}</span>{' '}
								</h3>
								<h3>
									Artist Name:{' '}
									<span className='gallery-text'>
										{image.data.artist_title}
									</span>
								</h3>
							</div>
							{/* {console.log(image)} */}
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default SearchResults;
