import * as UsersAPIUtil from '../util/users_api_util';
import { receivePresentationItem } from './presentation_actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_FOLLOWED_USERS = 'RECEIVE_FOLLOWED_USERS';

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveFollowedUsers = (followedUsers) => {
  return {
    type: RECEIVE_FOLLOWED_USERS,
    followedUsers
  };
};

export const fetchAllUsers = () => {
  return (dispatch) =>{
    return UsersAPIUtil.fetchAllUsers().then((users) => dispatch(receiveAllUsers(users)));
  };
};

export const fetchFollowedUsers = () => {
  return (dispatch) => {
    return UsersAPIUtil.fetchFollowedUsers().then((followedUsers) => dispatch(receiveFollowedUsers(followedUsers)));
  };
};

export const fetchUpdatedUser = (userId) => {
  return (dispatch) => {
    return UsersAPIUtil.fetchUpdatedUser(userId).then((user) => dispatch(receivePresentationItem(user, "Users")));
  };
};
