import { RECEIVE_ALL_USERS, RECEIVE_FOLLOWED_USERS} from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUsers = {users: [], followedUsers: []};

const UsersReducer = (oldState = _nullUsers, action) => {
  switch(action.type){
    case RECEIVE_ALL_USERS:
      return {users: action.users, followedUsers: oldState.followedUsers};
     case RECEIVE_FOLLOWED_USERS:
      return {users: oldState.users, followedUsers: action.followedUsers};
     default:
      return oldState;
  }
};

export default UsersReducer;
