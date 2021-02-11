import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import {addSong} from '../actions';
function mapStateToProps(state) {
	return {
		styles: state.styles,
	};
}

const mapDispatchToProps = {
    addSong: addSong
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);