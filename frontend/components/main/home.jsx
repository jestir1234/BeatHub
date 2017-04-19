import React from 'react';
import { withRouter } from 'react-router';
import SearchIndexContainer from './center/search_index_container';

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
        <div className="center-content">
          <SearchIndexContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
