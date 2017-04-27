import React from 'react';
import UsersAllContainer from '../modal/users_all_container';

class FollowedFriendsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {usersAllShow: false, followedUsers: []};
    this.renderAllUsers = this.renderAllUsers.bind(this);
  }

  componentDidMount(){
     this.props.fetchAllUsers();
  }

  componentWillReceiveProps(newProps){
    this.setState({usersAllShow: this.state.usersAllShow, followedUsers: newProps.followedUsers});
  }

  renderAllUsers(e) {
    e.preventDefault();
    this.setState({usersAllShow: !this.state.usersAllShow});
  }


  render(){
    const usersAll = this.state.usersAllShow ? (<UsersAllContainer />) : null;
    const followedUsers = this.state.followedUsers ? this.state.followedUsers.map((user, idx) => {
        return (
          <div key={idx} className="followed-user-item"><p>{user.username}</p></div>
        );
    }) : null;

    return(
      <div className="right-content">

        <div className="find-friends-container">
          <h1>See what your friends are playing</h1>

          <div className="find-friends-btn-container">
            <button onClick={this.renderAllUsers}>FIND FRIENDS</button>
          </div>

        </div>

        <div className="followed-index-container">
          {followedUsers}
        </div>

        <div className="friends-index-container">
          {usersAll}
        </div>

      </div>
    );
  }
}

export default FollowedFriendsIndex;
