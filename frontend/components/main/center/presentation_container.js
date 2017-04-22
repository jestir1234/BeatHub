import { connect } from 'react-redux';
import Presentation from './presentation';
import { fetchAlbumSongs, fetchSong, removeCurrentSong } from '../../../actions/song_actions';




const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    presentationInfo: ownProps.presentationInfo,
    songs: ownProps.songs,
    currentSong: ownProps.currentSong
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    removeCurrentSong: () => dispatch(removeCurrentSong())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
