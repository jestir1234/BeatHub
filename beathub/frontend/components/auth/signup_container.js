import { connect } from 'react-redux';
import SignUp from './signup';
import { signup } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
