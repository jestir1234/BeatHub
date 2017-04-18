import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router';

class SignUp extends React.Component{
  constructor(props){
    super(props);

    this.state = {username: "", email: "", password: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.router.push('/'));
  }

  render(){
    return (
      <div className="signup-form-page">
        <div className="signup-container">
          <h3>Sign up with your email address </h3>
          <form className="signup-form">
            <input type="text" value={this.state.username} placeholder="e.g.marshmallow" onChange={this.handleInput('username')}/>
            <br/>
            <input type="email" value={this.state.email} placeholder="e.g.marshmallow@email.com" onChange={this.handleInput('email')}/>
            <br/>
            <input type="password" value={this.state.password} placeholder="Choose a password" onChange={this.handleInput('password')}/>
            <br/>
            <button onClick={this.handleSubmit}>SIGN UP</button>
          </form>
          <br/>
          <div>
          Already have an account?<Link to='/login'> Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
