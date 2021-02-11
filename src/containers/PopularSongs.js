import { connect } from 'react-redux';
import PopularSongs from '../components/PopularSongs';
import { toggleFavouriteSong, upvoteSong, downvoteSong, addToCart, removeCartItem } from '../actions';

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
    removeCartItem: removeCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularSongs);