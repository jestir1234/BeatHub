import { connect } from 'react-redux';
import FollowedFriendsIndex from './followed_friends_index';
import { fetchAllUsers } from '../../../actions/user_actions';


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
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedFriendsIndex);
