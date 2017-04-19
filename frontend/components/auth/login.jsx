import React from 'react';
import { Link, withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {username: "", password: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseError = this.parseError.bind(this);
    this.resetErrors = this.resetErrors.bind(this);
  }

  componentDidMount(){
    this.parseError(this.props.errors);
  }

  componentWillReceiveProps(newProps){
    this.parseError(newProps.errors);
  }

  handleInput(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.router.push('/'), console.log("something went wrong"));
  }

  parseError(errors){
    if (errors.length > 0) {
      let element = document.getElementsByClassName("login-error");
      if (element.length > 0) {
        element[0].setAttribute("class", "show-login-error");
      }
    } else {
      this.resetErrors();
    }
  }

  resetErrors(){

    let elements = document.getElementsByClassName("show-login-error");
    if (elements.length > 0){
      elements[0].setAttribute("class", "login-error");
    }
  }

  render(){
    const errors = this.props.errors;
    return(
      <div className="login-form-page">
        <div className="login-container">
          <form className='login-form'>
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput('username')}/>
            <br/>
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
            <br/>
            <div className="login-error">{errors ? errors : ""}</div>
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
