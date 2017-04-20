import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const REMOVE_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchResults = (searchResults) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  };
};

export const removeSearchResults = (searchResults) => {
  return {
    type: REMOVE_SEARCH_RESULTS,
    searchResults
  };
};

export const fetchSearchResults = (query) => {
  return (dispatch) => {
    return SearchAPIUtil.searchMusic(query).then((search_results) => dispatch(receiveSearchResults(search_results)));
  };
};
