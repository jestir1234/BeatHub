import React from 'react';
import Spinner from '../../spinner'


class UsersAll extends React.Component {
  constructor(props){
    super(props);

    this.state = {formOpen: false, users: []};
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount(){
    this.setState({formOpen: true});
    this.props.fetchAllUsers();
  }

  componentWillReceiveProps(newProps){
    this.setState({formOpen: this.state.formOpen, users: newProps.users.users});
  }

  handleClick(e){
    e.preventDefault();
    let modal = document.getElementsByClassName('users-index-modal-open')[0];
    modal.style.display = "none";
  }

  handleFollow(user){
    return (e) => {
      e.preventDefault();
      let currentUser = this.props.currentUser;
      let follow = {follower_id: currentUser.id, followable_id: user.id, followable_type: "User"};
      if (user.followed){
        this.props.unfollowUser(follow).then(() => this.props.fetchAllUsers());
      } else {
        this.props.followUser(follow).then(() => this.props.fetchAllUsers());
      }
    };
  }


  render(){

    const users = this.state.users ? this.state.users.map((user, idx) => {
      let followStatus = user.followed;
      return (
        <div className="user-item" key={idx}>
          <div className="user-thumb">
            <img src={user.default_image_url}/>
          </div>
          {user.username}
          <button onClick={this.handleFollow(user)}>{followStatus ? "Unfollow" : "Follow"}</button>
        </div>);
    }) : <Spinner />;

    return(
      <div className={this.state.formOpen ? "users-index-modal-open" : "users-index-modal-close"}>

        <div className="users-index-modal-content">

            <div className="user-index-header">
              <span onClick={this.handleClick} className="close">&times;</span>
              <h1>Follow</h1>
            </div>

            <div className="users-list-container">

              <div className="users-list">
                {users}
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default UsersAll;
