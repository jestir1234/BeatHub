import { REMOVE_SONG_FROM_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../actions/playlist_songs_actions';
import merge from 'lodash/merge';


const PlaylistSongsReducer = (oldState = {}, action) => {
  switch(action.type){
    case REMOVE_SONG_FROM_PLAYLIST:
      let copy = merge({}, oldState);
      delete copy[action.playlistSongId];
      return copy;
    case ADD_SONG_TO_PLAYLIST:
      return merge({}, oldState, action.playlistSong);
    default:
      return oldState;
  }
};

export default PlaylistSongsReducer;
