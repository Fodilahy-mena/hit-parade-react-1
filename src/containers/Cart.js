import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {removeCartItem, emptyCart} from '../actions';


function mapStateToProps(state) {
	return {
		cartItems: state.cartItems
	};
}


const mapDispatchToProps = {
    removeCartItem: removeCartItem,
    emptyCart: emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);