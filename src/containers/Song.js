import { connect } from 'react-redux';
// import { getSongs } from '../actions';
import Song from '../components/Song';

function mapStateToProps(state) {
	return {
		songs: state.songs,
	};
}

// const mapDispatchToProps = {
// 	getSongs,
// };

export default connect(mapStateToProps, null)(Song);