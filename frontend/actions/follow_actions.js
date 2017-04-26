export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
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



export const createFollow = (follow) => {
  return (dispatch) => {
    return FollowAPIUtil.createFollow(follow).then((follow) => dispatch(receiveFollow(follow)));
  };
};

export const deleteFollow = (follow) => {
  return (dispatch) => {
    return FollowAPIUtil.deleteFollow(follow).then(() => dispatch(removeFollow(follow)));
  };
};
