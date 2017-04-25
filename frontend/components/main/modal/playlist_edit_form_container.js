import { connect } from 'react-redux';
import { updatePlaylist } from "../../../actions/playlist_actions";
import PlaylistEditForm from './playlist_edit_form';

const mapStateToProps = (state, ownProps) => {
  
  return {
    currentUser: state.session.currentUser,
    currentPlaylist: ownProps.currentPlaylist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistEditForm);
