import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUsers = {users: []};

const UsersReducer = (oldState = _nullUsers, action) => {
  switch(action.type){
    case RECEIVE_ALL_USERS:
      return {users: action.users};
     default:
      return oldState;
  }
};

export default UsersReducer;
