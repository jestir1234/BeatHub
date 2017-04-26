import {connect} from 'react-redux';
import UsersAll from './users_all';
import { fetchAllUsers } from '../../../actions/user_actions';
import { followUser, unfollowUser } from '../../../actions/follow_actions';


const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    followUser: (follow) => dispatch(followUser(follow)),
    unfollowUser: (follow) => dispatch(unfollowUser(follow))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAll);
