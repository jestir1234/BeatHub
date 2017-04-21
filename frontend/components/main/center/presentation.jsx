import React from 'react';


class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {presentationInfo: null};
    this.renderAlbum = this.renderAlbum.bind(this);
  }

  renderAlbum(album){
    let albumName = album.name;
    let artist = album.artist.name;
    let albumArt = album.image_url;
    return (
        <div className="album-show">
          <img src={albumArt}/>
          <h1>{albumName}</h1>
          <p>By {artist}</p>
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
