import React from 'react';
import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

function Search(props) {
    const searchOptions = {
			api: 'https://api.artic.edu/api/v1/artworks',
			numberOfResults: 25,
			endpoint: '/search',
		};

        const [images, setImages] = useState([]);
        const [searchString, setSearchString] = useState('');
        const [lastSearch, setLastSearch] = useState('');

        useEffect(() => {
            getImages(searchString);
        }, []);

        function getImages(searchString) {
            const url = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}&limit=${searchOptions.numberOfResults}`;

            fetch(url) 
            .then((res) => res.json())
            .then((res) => {
                setImages(res.data);
                setLastSearch(searchString);
                setSearchString('');
            })
            .catch(console.error);
        }

        function handleChange(event) {
            setSearchString(event.target.value);
        }

        function handleSubmit(event) {
            event.preventDefault();
            getImages(searchString);
        }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Search For ArtWork'
            type='text'
            name='searchString'
            required
            onChange={handleChange}
            value={searchString}/> 
            <button type='submit'>
                Search
            </button>
            <SearchResults images={images} />
        </form>
    );
}

export default Search;