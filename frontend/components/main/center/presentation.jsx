import React from 'react';
import { Link } from 'react-router';
import SongItem from './list/song_item';

class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {presentationInfo: null, songs: []};
    this.renderAlbum = this.renderAlbum.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.presentationInfo !== this.state.presentationInfo) {
      this.setState({presentationInfo: nextProps.presentationInfo, songs: this.state.songs});
      let album = nextProps.presentationInfo;
      this.props.fetchAlbumSongs(album.id).then((songs) => {
        this.setState({presentationInfo: this.state.presentationInfo, songs: songs.songs});
      });
    }
  }


  renderAlbum(album){
    let albumName = album.name;
    let artist = album.artist.name;
    let albumArt = album.image_url;

    let albumSongs = this.state.songs.length ? this.state.songs.map((song, idx) => {
      return(
        <div>
          <SongItem song={song} key={idx}/>
        </div>
      );
    }) : null;

    return (
        <div className="album-show">
          <div className="album-show-description">
            <img src={albumArt}/>
            <h1>{albumName}</h1>
            <p>By <Link id="artist-link">{artist}</Link></p>
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
