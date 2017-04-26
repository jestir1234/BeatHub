import React from 'react';


class UsersAll extends React.Component {
  constructor(props){
    super(props);

    this.state = {formOpen: false, users: []};
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


  render(){

    const users = this.state.users ? this.state.users.map((user, idx) => {
      return (<div className="user-item" key={idx}>{user.username} <button>Follow</button></div>);
    }) : null;

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
