export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
import { receivePresentationItem } from './presentation_actions';
import * as FollowAPIUtil from '../util/follow_api_util';


export const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

export const removeFollow = (followId) => {
  return {
    type: REMOVE_FOLLOW,
    followId
  };
};



export const createFollow = (follow, type) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(follow).then((followable) => {
      return dispatch(receivePresentationItem(followable, type));
    }
    );
  };
};

export const deleteFollow = (follow, type) => {
  return (dispatch) => {
    return FollowAPIUtil.deleteFollow(follow).then((followable) => dispatch(receivePresentationItem(followable, type)));
  };
};
