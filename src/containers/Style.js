import { connect } from 'react-redux';
import Style from '../components/Style';

function mapStateToProps(state) {
	return {
		songs: state.songs,
	};
}

export default connect(mapStateToProps, null)(Style);