import React from 'react';
import { Link } from 'react-router';
import SongItem from './list/song_item';
import SoundComponent from '../bottom/sound_component';

class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {songs: [], presentationItem: null};
    this.renderAlbum = this.renderAlbum.bind(this);
    this.renderPresentation = this.renderPresentation.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
  }


  componentWillReceiveProps(nextProps){

    if (nextProps.presentationItem.item !== this.state.presentationItem) {
      this.setState({presentationItem: nextProps.presentationItem.item, songs: this.state.songs});
      if (nextProps.presentationItem.item){
        if (nextProps.presentationItem.type === "Albums"){
          let album = nextProps.presentationItem.item;
          this.props.fetchAlbumSongs(album.id)
          .then((songs) => this.setState({presentationItem: this.state.presentationItem, songs: songs.songs}));
        } else if (nextProps.presentationItem.type === "Playlists"){
          let playlist = nextProps.presentationItem.item;
          this.props.fetchPlaylistSongs(playlist.id)
          .then((songs) => this.setState({presentationItem: this.state.presentationItem, songs: songs.songs}));
        } else if (nextProps.presentationItem.type === "Artists"){
          //fetch artist albums and top songs here
        }
      }
    }
  }

  convertInToTime(duration){
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10){
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  renderPresentation(presentationItem){
    if (presentationItem.type === "Albums") {
      return this.renderDisplay(presentationItem.item, presentationItem.type);
    } else if (presentationItem.type === "Playlists") {
      return this.renderDisplay(presentationItem.item, presentationItem.type);
    }

  }

  renderDisplay(presentationItem, presentationType){
    if (presentationType === "Artists") {
      // return renderArtist
    }
    let name = presentationItem.name;
    let owner = presentationItem.author || presentationItem.artist_name;
    let artwork = presentationItem.image_url;

    let songs = this.state.songs.length ? this.state.songs.map((song, idx) => {
      return(
        <div className="song-list-item-container">
          <SongItem
            song={song}
            removeCurrentSong={this.props.removeCurrentSong}
            fetchSong={this.props.fetchSong}
            playCurrentSong={this.props.playCurrentSong}
            pauseCurrentSong={this.props.pauseCurrentSong}
            stopCurrentSong={this.props.stopCurrentSong}
            currentSongStatus={this.props.currentSongStatus}
            currentSong={this.props.currentSong}
            key={idx}/>
          <p id="song-list-item-duration">{this.convertInToTime(song.duration)}</p>
        </div>
      );
    }) : null;

    return (
        <div className="album-show" id="light-to-dark-background">
          <div className="album-show-description">
            <img src={artwork}/>
            <h1>{name}</h1>
            <p>By <Link id="artist-link">{owner}</Link></p>
            <p id="album-song-count">{songs ? `${songs.length} SONGS` : null}</p>
            <button>Play</button>
          </div>
          <div className="album-show-songs">
            <ul>
              {songs}
            </ul>
          </div>
        </div>
    );

  }

  // will refactor this render function to include playlists
  renderAlbum(album){
    let albumName = album.name;
    let artist = album.artist_name;
    let albumArt = album.image_url;

    let albumSongs = this.state.songs.length ? this.state.songs.map((song, idx) => {
      return(
        <div className="song-list-item-container">
          <SongItem
            song={song}
            removeCurrentSong={this.props.removeCurrentSong}
            fetchSong={this.props.fetchSong}
            playCurrentSong={this.props.playCurrentSong}
            pauseCurrentSong={this.props.pauseCurrentSong}
            stopCurrentSong={this.props.stopCurrentSong}
            currentSongStatus={this.props.currentSongStatus}
            currentSong={this.props.currentSong}
            key={idx}/>
          <p id="song-list-item-duration">{this.convertInToTime(song.duration)}</p>
        </div>
      );
    }) : null;

    return (
        <div className="album-show" id="light-to-dark-background">
          <div className="album-show-description">
            <img src={albumArt}/>
            <h1>{albumName}</h1>
            <p>By <Link id="artist-link">{artist}</Link></p>
            <p id="album-song-count">{albumSongs ? `${albumSongs.length} SONGS` : null}</p>
            <button>Play</button>
          </div>
          <div className="album-show-songs">
            <ul>
              {albumSongs}
            </ul>
          </div>
        </div>
    );
  }


  render(){
    const presentationItem = this.props.presentationItem.item ? this.props.presentationItem : null;
    let showPage = presentationItem ? this.renderPresentation(presentationItem) : null;

    return(
      <div className="center-content">
        {showPage}
      </div>
    );
  }
}

export default Presentation;
