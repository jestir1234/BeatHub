import {RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLISTS, REMOVE_PLAYLIST, EDIT_PLAYLIST} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const _nullPlaylists = {playlist: null, playlists: []};

const PlaylistReducer = (oldState = _nullPlaylists, action) => {
  switch(action.type){
    case RECEIVE_PLAYLISTS:
      let newPlaylists = action.playlists;
      return merge({}, oldState, {playlists: newPlaylists});
    case RECEIVE_PLAYLIST:
      let newPlaylist = action.playlist;
      let newState = merge({}, oldState);
      newState.playlists.push(newPlaylist);
      return merge({}, newState, {playlist: newPlaylist});
    case REMOVE_PLAYLISTS:
      return merge({}, oldState, {playlists: null});
    case REMOVE_PLAYLIST:
      return merge({}, oldState, {playlist: null});
    case EDIT_PLAYLIST:
      let copy = merge({}, oldState);
      copy[action.playlist.id] = action.playlist;
      return copy;
    default:
      return oldState;
  }
};

export default PlaylistReducer;
