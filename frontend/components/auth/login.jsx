import React from 'react';
import { Link, withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {username: "", password: ""};
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
    this.props.login(this.state).then(() => this.props.router.push('/'));
  }

  render(){
    return(

      <div className="login-form-page">
        <div className="login-container">
          <form className='login-form'>
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput('username')}/>
            <br/>
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
            <br/>
            <button onClick={this.handleSubmit}>LOG IN</button>
          </form>
        </div>
        <div className="link-container">
          <Link className="signup-link" to='/signup'>SIGN UP</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
