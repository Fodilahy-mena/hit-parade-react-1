import { connect } from 'react-redux';
import PopularSongs from '../components/PopularSongs';
import {setCartItems, toggleFavouriteSong, upvoteSong, downvoteSong, addToCart, removeCartItem, setSongs } from '../actions';

function mapStateToProps(state) {
	return {
		songs: state.songs,
        cartItems: state.cartItems
	};
}

const mapDispatchToProps = {
	favoriteSong: toggleFavouriteSong,
    upvoteSong: upvoteSong,
	downvoteSong: downvoteSong,
    addToCart: addToCart,
    removeCartItem: removeCartItem,
	setSongs: setSongs,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularSongs);