import { connect } from 'react-redux';
import Presentation from './presentation';
import { fetchAlbumSongs, fetchPlaylistSongs, fetchSong, removeCurrentSong } from '../../../actions/song_actions';
import { playCurrentSong, pauseCurrentSong, stopCurrentSong } from '../../../actions/current_song_actions';
import { deletePlaylist } from '../../../actions/playlist_actions';
import { receivePresentationItem } from '../../../actions/presentation_actions';
import { fetchArtistAlbums } from '../../../actions/artist_actions';
import { addSongsToQueu } from '../../../actions/queu_actions';
import { createFollow, deleteFollow, followUser, unfollowUser } from '../../../actions/follow_actions';
import { fetchAllUsers } from '../../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  let followedUsers = [];

  state.users.users.forEach((user) => {
     if (user.followed){
       followedUsers.push(user);
     }
  });

  return {
    followedUsers: followedUsers,
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
    addSongsToQueu: (songs) => dispatch(addSongsToQueu(songs)),
    createFollow: (follow, type) => dispatch(createFollow(follow, type)),
    deleteFollow: (follow, type) => dispatch(deleteFollow(follow, type)),
    followUser: (follow) => dispatch(followUser(follow)),
    unfollowUser: (follow) => dispatch(unfollowUser(follow)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation);
