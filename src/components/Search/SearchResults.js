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
		<div>
			{images.map((image) => {
				return (
					<Link to={`/gallery/details/${image.data.id}`} key={image.id}>
						<div className='search-card'>
							<img
								src={
									image.data &&
									`https://www.artic.edu/iiif/2/${image.data.image_id}/full/843,/0/default.jpg`
								}
								alt={image.data.title}
								key={image.data.id}
							/>
							<h2>
								Title: <span>{image.data.title}</span>{' '}
							</h2>
							<h3>
								Artist Name: <span>{image.data.artist_title}</span>
							</h3>
							{/* {console.log(image)} */}
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default SearchResults;
