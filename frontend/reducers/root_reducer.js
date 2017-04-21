import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SearchResultsReducer from './search_reducer';
import AlbumReducer from './album_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  searchResults: SearchResultsReducer,
  Album: AlbumReducer
});

export default RootReducer;
