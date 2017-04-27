import { connect } from 'react-redux';
import FollowedFriendsIndex from './followed_friends_index';
import { fetchAllUsers } from '../../../actions/user_actions';
import { receivePresentationItem } from '../../../actions/presentation_actions';


const mapStateToProps = (state) => {
  let followedUsers = [];

  state.users.users.forEach((user) => {
     if (user.followed){
       followedUsers.push(user);
     }
  });

  return {
    followedUsers: followedUsers,
    users: state.users.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    receivePresentationItem: (presentationItem, presentationType) => dispatch(receivePresentationItem(presentationItem, presentationType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedFriendsIndex);
