import React from 'react';
import './Home.css';

function HomeBigImage(props) {

    return (
        <div className='big-image-container'>
            <img 
                src={props.featuredImage.source}
                alt={props.featuredImage.alt}            
            />
        </div>
    );
}

export default HomeBigImage;