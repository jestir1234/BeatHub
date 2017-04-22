import React from 'react';
import { Link } from 'react-router';
import SongItem from './list/song_item';
import SoundComponent from '../bottom/sound_component';

class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {presentationInfo: null, songs: []};
    this.renderAlbum = this.renderAlbum.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.presentationInfo !== this.state.presentationInfo) {
      this.setState({presentationInfo: nextProps.presentationInfo, songs: this.state.songs});
      if (nextProps.presentationInfo){
        let album = nextProps.presentationInfo;
        this.props.fetchAlbumSongs(album.id).then((songs) => {
          this.setState({presentationInfo: this.state.presentationInfo, songs: songs.songs});
        });
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

    const presentationInfo = this.props.presentationInfo ? this.props.presentationInfo : null;
    let showPage = presentationInfo ? this.renderAlbum(presentationInfo) : null;

    return(
      <div className="center-content">
        {showPage}
      </div>
    );
  }
}

export default Presentation;


// <div className="center-content">{presentationInfo ? presentationInfo.name : "THIS IS THE PRESENTATION PAGE"}</div>
