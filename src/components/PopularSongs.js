import React, { useContext } from 'react';
import { Context } from './Context';
import SongItem from './SongItem';
import styled from 'styled-components';

const SongsContainer = styled.ul`
	display: grid;
	grid-template-columns: 500px;
	gap: 20px;
	padding: 0;
	margin: 0;
`;

export default function PopularSongs({songs, cartItems, favoriteSong, upvoteSong, downvoteSong, addToCart, removeCartItem}) {

	// This is an array from context and no longer be used since we use redux
	// const { songs } = useContext(Context);

	function sortSongsByPopularity(songA, songB) {
		const ratioA = songA.upvotes - songA.downvotes;
		const ratioB = songB.upvotes - songB.downvotes;
		return ratioB - ratioA;
	}

	function showSongsList() {
		if (!songs) return;
		const songsList = songs
			.sort(sortSongsByPopularity)
			.map(song => <SongItem key={song.id}
				cartItems={cartItems}
				song={song} 
				favoriteSong={favoriteSong} 
				upvoteSong={upvoteSong} downvoteSong={downvoteSong}
				addToCart={addToCart} removeCartItem={removeCartItem}
				></SongItem>);
		return songsList;
	}

	return (
		<div>
			<h1>Popular Songs</h1>
			<SongsContainer>{showSongsList()}</SongsContainer>
		</div>
	);
}
