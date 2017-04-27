import React from 'react';
import { withRouter, Link } from 'react-router';


class Profile extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.fetchUpdatedUser(this.props.currentUser.id).then((user) => this.props.receivePresentationItem(this.props.currentUser, "Users"));
  }

  handleSelectUser(e){
    e.preventDefault();
    this.props.fetchUpdatedUser(this.props.currentUser.id);
  }

  render(){
    const user = this.props.currentUser;
    return(
      <div className="profile-container">
        <div id="profile-icon-container">
          <Link onClick={this.handleSelectUser}><span id="profile-link"><i className="fa fa-user-circle-o" aria-hidden="true"></i> {user ? user.username : ""}</span></Link>
        </div>
        <div id="logout-btn-container">
          <button onClick={() => this.props.logout().then(() => this.props.router.push('/login'))}>Log out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
