import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist, deletePlaylist,  updatePlaylist } from '../../../actions/playlist_actions';
import { receivePresentationItem } from '../../../actions/presentation_actions';
import { fetchUpdatedUser } from '../../../actions/user_actions';
import UserMusicIndex from './user_music_index';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    playlists: state.playlists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    receivePresentationItem: (presentationItem, presentationType) => dispatch(receivePresentationItem(presentationItem, presentationType)),
    fetchUpdatedUser: (userId) => dispatch(fetchUpdatedUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMusicIndex);
