import React from 'react';
import UsersAllContainer from '../modal/users_all_container';

class FollowedFriendsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {usersAllShow: false};
    this.renderAllUsers = this.renderAllUsers.bind(this);
  }


  renderAllUsers(e) {
    e.preventDefault();
    this.setState({usersAllShow: !this.state.usersAllShow});
  }


  render(){
    const usersAll = this.state.usersAllShow ? (<UsersAllContainer />) : null;

    return(
      <div className="right-content">

        <div className="find-friends-container">
          <h1>See what your friends are playing</h1>

          <div className="find-friends-btn-container">
            <button onClick={this.renderAllUsers}>FIND FRIENDS</button>
          </div>

        </div>

        <div className="friends-index-container">
          FOLLOWED FRIENDS INDEX WILL GO HERE
          {usersAll}
        </div>

      </div>
    );
  }
}

export default FollowedFriendsIndex;
