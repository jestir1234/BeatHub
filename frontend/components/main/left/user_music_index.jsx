import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';


class UserMusicIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {playlists: []};
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectPlaylist = this.handleSelectPlaylist.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.fetchPlaylists(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.currentUser){
      if (newProps.playlists.playlists.length){
        if (this.state.playlists.length !== newProps.playlists.playlists.length){
          this.setState({playlists: newProps.playlists.playlists});
        }
      } else if (newProps.playlists.playlist) {
        if (!this.state.playlists.includes(newProps.playlists.playlist)){
          let copy = merge({}, this.state);
          copy.playlists.push(newProps.playlists.playlist);
          this.setState(copy);
        }
      }
    }
  }

  handleSelectPlaylist(playlist){
    return (e) => {
      e.preventDefault();
      this.props.receivePresentationItem(playlist, "Playlists");
    };
  }

  handleClick(e){
    e.preventDefault();
    let modal = document.getElementById("playlist-form-modal");
    modal.style.display = "inline-block";
  }


  render(){
    let userPlaylists = this.state.playlists ? this.state.playlists.map((playlist, idx) => {
        return(
          <li onClick={this.handleSelectPlaylist(playlist)} className="playlist-item" key={idx}>{playlist.name}</li>
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
