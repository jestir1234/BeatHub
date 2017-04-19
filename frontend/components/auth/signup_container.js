import { connect } from 'react-redux';
import SignUp from './signup';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
