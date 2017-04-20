import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SearchResultsReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  searchResults: SearchResultsReducer
});

export default RootReducer;
