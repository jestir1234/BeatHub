import { RECEIVE_FEATURED_ALBUMS } from '../actions/album_actions';


const FeaturedReducer = (oldState = null, action) => {
  switch(action.type){
    case RECEIVE_FEATURED_ALBUMS:
      return action.albums;
    default:
      return oldState;
  }
};

export default FeaturedReducer;
