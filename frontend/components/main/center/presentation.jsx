import React from 'react';
import { Link } from 'react-router';
import SongItem from './list/song_item';
import SoundComponent from '../bottom/sound_component';

class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {presentationInfo: null, songs: []};
    this.renderAlbum = this.renderAlbum.bind(this);
    this.showPlayButton = this.showPlayButton.bind(this);
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

  showPlayButton(){
    $(".song-list-item-container").hover(() => {
      let $el = $(".song-item-play-btn-container");
      $el.css("background-color", "red");
    });
  }

  renderAlbum(album){
    
    let albumName = album.name;
    let artist = album.artist_name;
    let albumArt = album.image_url;

    let albumSongs = this.state.songs.length ? this.state.songs.map((song, idx) => {
      return(
        <div className="song-list-item-container">
          <SongItem song={song} key={idx}/><p id="song-list-item-duration">{song.duration} seconds</p>
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
            <SoundComponent />
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
