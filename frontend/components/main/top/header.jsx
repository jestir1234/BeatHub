import React from 'react';
import Profile from './top_right/profile';
import SearchBarContainer from './top_left/search_bar_container';

class Header extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="top-content">
        <SearchBarContainer />
        <Profile currentUser={this.props.currentUser} fetchUpdatedUser={this.props.fetchUpdatedUser} logout={this.props.logout} receivePresentationItem={this.props.receivePresentationItem}/>
      </div>
    );
  }
}

export default Header;
