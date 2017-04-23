import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SearchResultsReducer from './search_reducer';
import AlbumReducer from './album_reducer';
import SongsReducer from './songs_reducer';
import CurrentSongStatusReducer from './current_song_reducer';
import PlaylistReducer from './playlist_reducer';
import { USER_LOGOUT } from '../actions/session_actions';

const RootReducer = (state, action) => {
  if (action.type === USER_LOGOUT){
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  session: SessionReducer,
  searchResults: SearchResultsReducer,
  Album: AlbumReducer,
  songs: SongsReducer,
  currentSongStatus: CurrentSongStatusReducer,
  playlists: PlaylistReducer
});

export default RootReducer;
