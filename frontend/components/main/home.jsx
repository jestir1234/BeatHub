import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const user = this.props.currentUser;
    return(
      <div className="main-page-container">
        WELCOME {user ? user.username : ""} (this is the home component)
        <button onClick={() => this.props.logout().then(() => this.props.router.push('/login'))}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Home);
