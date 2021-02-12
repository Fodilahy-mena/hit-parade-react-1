import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {removeCartItem, emptyCart} from '../actions';

const mapDispatchToProps = {
    removeCartItem: removeCartItem,
    emptyCart: emptyCart
};

export default connect(null, mapDispatchToProps)(Cart);