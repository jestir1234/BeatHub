import React from 'react';
import { withRouter } from 'react-router';


class Profile extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const user = this.props.currentUser;
    return(
      <div className="profile-container">
        <div id="profile-icon-container">
          <span id="profile-link"><i className="fa fa-user-circle-o" aria-hidden="true"></i> {user ? user.username : ""}</span>
        </div>
        <div id="logout-btn-container">
          <button onClick={() => this.props.logout().then(() => this.props.router.push('/login'))}>Log out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
