import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GalleryDetails.css';

function GalleryDetails(props) {
	const [details, setDetails] = useState('');
	const { galleryIds, setGalleryIds } = props;

	const { id } = useParams();

	const length = galleryIds.length;
	useEffect(() => {
		const url = `https://api.artic.edu/api/v1/artworks/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setDetails(res.data);
				// console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	if (!details) {
		return <div>Gallery Loading ...</div>;
	}

	function openUrl() {
		window.open(`https://www.artic.edu/artworks/${id}`);
	}

	return (
		<div className='details-container'>
			<div className='text-container'>
				<h2>
					Title: <span className='details-text'>{details.title}</span>
				</h2>
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
				<button
					onClick={() => openUrl(`https://www.artic.edu/artworks/${id}`)}
					className='details-btn'>
					Visit Artwork
				</button>
			</div>
			<div className='details-image' style={{ backgroundImage: `url(https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg)` }}>
			</div>
			{/* <img
				src={`https://www.artic.edu/iiif/2/${details.image_id}/full/550,/0/default.jpg`}
				alt={details.alt_title}
				className='details-image'
			/> */}
		</div>
	);
}

export default GalleryDetails;
