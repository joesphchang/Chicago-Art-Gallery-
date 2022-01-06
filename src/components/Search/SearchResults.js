import React from 'react';

function SearchResults(props) {
	const { images } = props;

	if (!images) {
		return <div>No Images Found</div>;
	}

	return (
		<div>
			{images.map((image) => (
				<div>
					<img
						src={
							image.data &&
							`https://www.artic.edu/iiif/2/${image.data.image_id}/full/843,/0/default.jpg`
						}
						alt={image.data.title}
					/>
					{/* {console.log(image)} */}
				</div>
			))}
		</div>
	);
}

export default SearchResults;
