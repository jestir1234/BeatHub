import React from 'react';
import Profile from './top_right/profile';
import SearchBar from './top_left/search_bar';

class Header extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="header-container">
        <SearchBar />
        <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
      </div>
    );
  }
}

export default Header;
