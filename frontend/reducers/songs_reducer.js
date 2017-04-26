import { RECEIVE_CURRENT_SONG, RECEIVE_SONGS, REMOVE_CURRENT_SONG, REMOVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

export const _nullSongs = {songs: [], currentSong: null};

const SongsReducer = (oldState = _nullSongs, action) => {

  switch(action.type) {
    case RECEIVE_SONGS:
      let newSongs = action.songs;
      let copy = merge({}, oldState, {songs: newSongs});
      return copy;
    case RECEIVE_CURRENT_SONG:
    debugger
      let newCurrentSong = action.currentSong;
      let copy2 = merge({}, oldState, {currentSong: newCurrentSong});
      return copy2;
    case REMOVE_CURRENT_SONG:
      let copy3 = merge({}, oldState, {currentSong: null});
      return copy3;
    default:
      return oldState;
  }
};

export default SongsReducer;
