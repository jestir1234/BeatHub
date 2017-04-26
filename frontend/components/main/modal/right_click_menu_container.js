import { connect } from 'react-redux';
import RightClickMenu from './right_click_menu';
import { createSongToPlaylist, deleteSongFromPlaylist } from '../../../actions/playlist_songs_actions';
import { addSongToQueu } from '../../../actions/queu_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    song: ownProps.song,
    currentUser: state.session.currentUser,
    playlists: state.playlists.playlists,
    presentationItem: state.presentationItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSongToPlaylist: (playlistSong) => dispatch(createSongToPlaylist(playlistSong)),
    deleteSongFromPlaylist: (playlistSong) => dispatch(deleteSongFromPlaylist(playlistSong)),
    addSongToQueu: (song) => dispatch(addSongToQueu(song))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightClickMenu);
