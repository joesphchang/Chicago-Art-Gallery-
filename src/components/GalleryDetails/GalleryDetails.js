import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 

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
        })
    }, [])

    if (!details) {
        return <div>Gallery not found ...</div>
    }

    return (
        <div>
            <img src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`} alt={details.alt_title} />
            <h1>{details.title}</h1>
        </div>
    );
}

export default GalleryDetails;