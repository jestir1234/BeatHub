import React from 'react';

class RightClickMenu extends React.Component {
  constructor(props){
    super(props);


    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleAddSongToPlayist = this.handleAddSongToPlayist.bind(this);
    this.exitMenu = this.exitMenu.bind(this);
    this.handleDeleteSongFromPlaylist = this.handleDeleteSongFromPlaylist.bind(this);
  }


  handleMouseEnter(){
    return (e) => {
      e.preventDefault();
      let el = document.getElementsByClassName('menu-playlists')[this.props.idx];
      el.style.display = "block";
    };
  }

  handleAddSongToPlayist(song, playlist){
    return (e) => {
      e.preventDefault();
      let playlistSong = {song_id: song.id, playlist_id: playlist.id};
      this.props.createSongToPlaylist(playlistSong).then(() => this.exitMenu());
    };
  }

  handleDeleteSongFromPlaylist(){
    return (e) => {
      e.preventDefault();
      let playlistSong = {id: this.props.song.playlist_song_id, playlist_ord: this.props.song.playlist_ord};
      this.props.deleteSongFromPlaylist(playlistSong).then(() => this.exitMenu());
    };
  }

  exitMenu(){
    let playlist_menu = document.getElementsByClassName('menu-playlists')[this.props.idx];
    let menu = document.getElementsByClassName('right-click-menu-container')[this.props.idx];

    menu.style.display = "none";
    playlist_menu.style.display = "none";
  }


  render(){

    let menu;
    document.addEventListener("click", (e) => {
      menu = document.getElementsByClassName('right-click-menu-container')[this.props.idx];
      if (e.path.includes(menu) || e.target.className === 'menu-playlists'){
        console.log("inside container");
      } else {
        let playlistMenu = document.getElementsByClassName("menu-playlists")[this.props.idx];
        playlistMenu.style.display = "none";
        menu.style.display = "none";
      }
    });

    const playlists = this.props.playlists.map((playlist, idx) => {
      return (<li onClick={this.handleAddSongToPlayist(this.props.song, playlist)} className="menu-playlist-item" key={idx} >{[playlist.name]}</li>);
    });

    let playlistOption;
    let that = this;
    if (this.props.presentationItem.type === "Albums") {
      playlistOption = (<p onMouseOver={this.handleMouseEnter()}  className="add-song-option">Add song to playlist</p>);
    } else {
      playlistOption = (<p onClick={this.handleDeleteSongFromPlaylist()}>Remove song from playlist</p>);
    }
    return (
      <div className="right-click-menu-container" >
        <div className="right-click-menu-items">
        {playlistOption}
        </div>
        <div className="menu-playlists">
          <h3>Playlists</h3>
          <ul>
            {playlists}
          </ul>
        </div>
      </div>
    );
  }
}

export default RightClickMenu;
