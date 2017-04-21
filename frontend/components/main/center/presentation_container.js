import { connect } from 'react-redux';
import Presentation from './presentation';
import { fetchAlbumSongs } from '../../../actions/song_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    presentationInfo: ownProps.presentationInfo,
    songs: ownProps.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
