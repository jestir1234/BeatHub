import React from 'react';
import { Link } from 'react-router';


class UserMusicIndex extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.fetchPlaylists(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.currentUser){
      if (newProps.playlists.playlists){
        if (newProps.playlists.playlists.length !== this.props.playlists.playlists) {
          this.props.fetchPlaylists(this.props.currentUser.id);
        }
      }
    }
  }

  handleClick(e){
    e.preventDefault();
    let modal = document.getElementById("playlist-form-modal");
    modal.style.display = "inline-block";
  }


  render(){
    let playlists = this.props.playlists.playlists ? this.props.playlists.playlists : null;
    let userPlaylists = playlists ? playlists.map((playlist) => {
        return(
          <li className="playlist-item" key={playlist.id}>{playlist.name}</li>
        );
    }) : null;

    return(
      <div className="left-content">
        THIS IS THE USER MUSIC INDEX. USER NAV FOR SONGS, ALBUMS, ARTISTS INDEX WILL GO HERE

        <div className="user-playlist-index">
            <h3>PLAYLISTS</h3>
            <ul>
              {userPlaylists}
            </ul>
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
