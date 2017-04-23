import React from 'react';
import { Link } from 'react-router';


class UserMusicIndex extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    let modal = document.getElementById("playlist-form-modal");
    modal.style.display = "inline-block";
  }


  render(){
    return(
      <div className="left-content">
        THIS IS THE USER MUSIC INDEX. USER NAV FOR SONGS, ALBUMS, ARTISTS INDEX WILL GO HERE

        <div className="user-playlist-index">

        </div>

        <div className="create-playlist-link">
          <div onClick={this.handleClick} className="create-playlist-icon"><div id="cross">+</div></div>
          <Link onClick={this.handleClick}>New Playlist</Link>
        </div>

      </div>
    );
  }
}

export default UserMusicIndex;
