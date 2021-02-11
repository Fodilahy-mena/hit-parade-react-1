import { connect } from 'react-redux';
import StylesList from '../components/StylesList';

function mapStateToProps(state) {
	return {
        styles: state.styles,
	};
}

export default connect(mapStateToProps, null)(StylesList);