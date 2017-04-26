import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const _nullFollows = {};

const FollowReducer = (oldState = _nullFollows, action) => {
  switch(action.type) {
    case RECEIVE_FOLLOW:
      let copy = merge({}, oldState);
      copy[action.follow.id] = action.follow;
      return copy;
    case REMOVE_FOLLOW:
      let copy2 = merge({}, oldState);
      delete copy2[action.followId];
      return copy2;
    default:
      return oldState;
  }
};

export default FollowReducer;
