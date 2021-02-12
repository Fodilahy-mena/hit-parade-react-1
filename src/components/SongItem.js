import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,  useDispatch } from 'react-redux';
import { Context } from './Context';
import {setCartItems} from '../actions';

import { Link } from 'react-router-dom';

import {
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlineShopping,
	AiTwotoneShopping,
	AiOutlineEllipsis,
} from 'react-icons/ai';

const SongItemStyle = styled.div`
	display: flex;
	gap: 20px;
	color: white;
	background: #272343;
	padding: 2rem;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	.song-title {
		font-size: 1.8rem;
	}
	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.heart-icon {
		color: #ffd803;
	}
	.votes,
	a {
		color: #bae8e8;
	}
	svg:hover {
		color: #ffd803;
	}
`;

export default function SongItem({song, favoriteSong, upvoteSong, downvoteSong, addToCart, removeCartItem }) {
const cartItems = useSelector(state => state.cartItems);
const dispatch = useDispatch();
	// Those are functions and variables state from context and they no longer be used since we use redux
	// const {
	// 	// favoriteSong,
	// 	// upvoteSong,
	// 	// downvoteSong,
	// 	// addToCart,
	// 	// cartItems,
	// 	// removeCartItem,
	// } = useContext(Context);

	useEffect(() => {
		if (cartItems.length > 0) {
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		}
	}, [cartItems]);

	useEffect(() => {
		dispatch(setCartItems(cartItems));
	}, [])

	function showCartIcon() {
		const isAlreadyInCart = cartItems.some(item => item.id === song.id);
		if (isAlreadyInCart) {
			return <AiTwotoneShopping onClick={() => removeCartItem(song.id)} />;
		}
		return <AiOutlineShopping onClick={() => addToCart(song)} />;
	}

	function showFavoriteIcon() {
		return song.isFavorited ? <AiFillHeart /> : <AiOutlineHeart />;
	}

	return (
		<SongItemStyle>
			<div className="heart-icon" onClick={() => favoriteSong(song.id)}>
				{showFavoriteIcon()}
			</div>
			<div>
				<div className="song-title">{song.title}</div>
				<div>{song.artist}</div>
			</div>
			<div className="votes">
				{song.upvotes} <AiOutlineArrowUp onClick={() => upvoteSong(song.id)} />
			</div>
			<div className="votes">
				{song.downvotes} <AiOutlineArrowDown onClick={() => downvoteSong(song.id)} />
			</div>
			{showCartIcon()}
			<div>
				<Link to={`/song/${song.id}`}>
					<AiOutlineEllipsis />
				</Link>
			</div>
		</SongItemStyle>
	);
}
