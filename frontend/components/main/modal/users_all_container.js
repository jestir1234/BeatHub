import {connect} from 'react-redux';
import UsersAll from './users_all';
import { fetchAllUsers } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    users: state.users
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
)(UsersAll);
