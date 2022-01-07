import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GalleryDetails.css';

function GalleryDetails(props) {
	const [details, setDetails] = useState('');

	const { id } = useParams();

	useEffect(() => {
		const url = `https://api.artic.edu/api/v1/artworks/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setDetails(res.data);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!details) {
		return <div>Gallery not found ...</div>;
	}

	return (
		<div className='details-container'>
			<img
				src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`}
				alt={details.alt_title}
			/>
			<h1>
				Title: <span className='details-text'>{details.title}</span>
			</h1>
			<h2>
				Artist: <span className='details-text'>{details.artist_display}</span>
			</h2>
			<h2>
				Place Of Origin:{' '}
				<span className='details-text'>{details.place_of_origin}</span>
			</h2>
			<h2>
				Made In: <span className='details-text'>{details.date_end}</span>
			</h2>
			<h2>
				Medium: <span className='details-text'>{details.medium_display}</span>
			</h2>
		</div>
	);
}

export default GalleryDetails;
