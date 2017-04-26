import { connect } from 'react-redux';
import Presentation from './presentation';
import { fetchAlbumSongs, fetchPlaylistSongs, fetchSong, removeCurrentSong } from '../../../actions/song_actions';
import { playCurrentSong, pauseCurrentSong, stopCurrentSong } from '../../../actions/current_song_actions';
import { deletePlaylist } from '../../../actions/playlist_actions';
import { receivePresentationItem } from '../../../actions/presentation_actions';
import { fetchArtistAlbums } from '../../../actions/artist_actions';
import { addSongsToQueu } from '../../../actions/queu_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    presentationInfo: ownProps.presentationInfo,
    songs: ownProps.songs,
    currentSong: ownProps.currentSong,
    currentSongStatus: state.currentSongStatus,
    presentationItem: state.presentationItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumSongs: (albumId) => dispatch(fetchAlbumSongs(albumId)),
    fetchPlaylistSongs: (playlistId) => dispatch(fetchPlaylistSongs(playlistId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    playCurrentSong: (positionAndDuration) => dispatch(playCurrentSong(positionAndDuration)),
    pauseCurrentSong: (positionAndDuration) => dispatch(pauseCurrentSong(positionAndDuration)),
    stopCurrentSong: (positionAndDuration) => dispatch(stopCurrentSong(positionAndDuration)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist((playlistId))),
    receivePresentationItem: (presentationItem, presentationType) => dispatch(receivePresentationItem(presentationItem, presentationType)),
    fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
    addSongsToQueu: (songs) => dispatch(addSongsToQueu(songs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
