import { connect } from 'react-redux';
import Login from './login';
import { login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
