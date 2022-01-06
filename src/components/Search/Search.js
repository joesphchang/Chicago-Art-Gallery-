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

	async function getImages(searchString) {
		const url = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}&limit=${searchOptions.numberOfResults}`;
		let results = '';
		fetch(url)
			.then((res) => res.json())
			.then(async (res) => {
				results = res.data;
				// console.log(res.data);
				// Reference on learning Promise. all
				// https://pretagteam.com/question/how-to-make-api-calls-for-each-element-in-array
				const searchResults = await Promise.all(
					results.map(async (result) => {
						// console.log(result);
						const response = await fetch(result.api_link);
						return await response.json();
					})
				);
				console.log(searchResults);
				setImages(searchResults);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	function newImages(searchString) {
		const url = ``;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setImages(res.data);
			});
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
				value={searchString}
			/>
			<button type='submit'>Search</button>
			<SearchResults images={images} />
		</form>
	);
}

export default Search;
