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
      let previousPlaylists = oldState.playlists;
      let collection = [];
      previousPlaylists.forEach((playlist) => {
        if (playlist.id !== action.playlistId){
          collection.push(playlist);
        }
      });
      newState = {playlist: null, playlists: collection};
      return newState;
    case EDIT_PLAYLIST:
      let previousPlaylists2 = oldState.playlists;
      let collection2 = [];
      previousPlaylists2.forEach((playlist) => {
        if (playlist.id === action.playlist.id){
          collection2.push(action.playlist);
        } else {
          collection2.push(playlist);
        }
      });
      let newState2 = {playlist: null, playlists: collection2, status: "updated"};
      return newState2;
    default:
      return oldState;
  }
};

export default PlaylistReducer;
