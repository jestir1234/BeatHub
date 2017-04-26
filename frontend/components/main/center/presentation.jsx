import React from 'react';
import { Link } from 'react-router';
import SongItem from './list/song_item';
import SoundComponent from '../bottom/sound_component';
import SimpleSliderContainer from './carousel/simple_slider_container';
import PlaylistEditFormContainer from '../modal/playlist_edit_form_container';

class Presentation extends React.Component{
  constructor(props){
    super(props);

    this.state = {songs: [], presentationItem: null, menuOpen: false, editFormOpen: false, albums: null};
    this.renderAlbum = this.renderAlbum.bind(this);
    this.renderPresentation = this.renderPresentation.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
    this.sortByPlaylistOrd = this.sortByPlaylistOrd.bind(this);
    this.sortByAlbumOrd = this.sortByAlbumOrd.bind(this);
    this.handleDeletePlaylist = this.handleDeletePlaylist.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
    this.renderArtist = this.renderArtist.bind(this);
    this.handleSelectAlbum = this.handleSelectAlbum.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddSongsToQueu = this.handleAddSongsToQueu.bind(this);
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
          let artist = nextProps.presentationItem.item;
          this.props.fetchArtistAlbums(artist.id)
          .then((albumAction) => {
            return this.setState({presentationItem: this.state.presentationItem, albums: albumAction.artistAlbums});
          });
        }
      }
    }
  }

  handleAddSongsToQueu(e){
    e.preventDefault();
    this.props.addSongsToQueu(this.state.songs);
  }

  handleSelectAlbum(album){
    return (e) => {
      e.preventDefault();
      this.props.receivePresentationItem(album, "Albums");
    };
  }

  handleSelect(item, categoryType){
    return (e) => {
      e.preventDefault();
      this.props.receivePresentationItem(item, categoryType);
    };
  }


  handleOptions(e){
    e.preventDefault();
    this.setState({menuOpen: !this.state.menuOpen});
  }

  openEditForm(e){
    debugger
    e.preventDefault();
    this.setState({editFormOpen: !this.state.editFormOpen});
  }

  sortByPlaylistOrd(item1, item2){
    if (item1.playlist_ord < item2.playlist_ord) {
      return -1;
    } else {
      return 1;
    }
  }

  sortByAlbumOrd(item1, item2){
    if (item1.album_ord < item2.album_ord) {
      return -1;
    } else {
      return 1;
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

  handleDeletePlaylist(e){
    e.preventDefault();
    let playlist = this.props.presentationItem.item;
    this.setState({menuOpen: false});
    this.props.deletePlaylist(playlist.id).then(() => this.props.receivePresentationItem(null, null));

  }

  renderPresentation(presentationItem){

    if (presentationItem.type === "Albums") {
      return this.renderDisplay(presentationItem.item, presentationItem.type);
    } else if (presentationItem.type === "Playlists") {
      return this.renderDisplay(presentationItem.item, presentationItem.type);
    } else if (presentationItem.type === "Artists") {
      return this.renderDisplay(presentationItem.item, presentationItem.type);
    }

  }

  renderArtist(artist){

    let name = artist.name;
    let artwork = artist.image_url;
    let banner = artist.banner_url;
    let albums = this.state.albums ? this.state.albums.map((album, idx) => {
      return(
          <div className="artist-album-container" key={idx}>
            <Link onClick={this.handleSelectAlbum(album)}>
              <img src={album.image_url}/>
              <p className="album-name">{album.name}</p>
              <p className="artist-name">By {album.artist_name}</p>
            </Link>
          </div>
      );
    }) : null;


    return (
      <div className="artist-show">

       <div className="artist-banner">
         <img src={banner}/>
          <h1>{name}</h1>
       </div>

        <div className="artist-header">

          <div className="artist-header-content">
            <img src={artwork} />
          </div>

        </div>

        <div className="album-collection">
          <h1>Albums</h1>
          {albums}
        </div>

      </div>
    );
  }

  renderDisplay(presentationItem, presentationType){
    if (presentationType === "Artists") {
      return this.renderArtist(presentationItem);
    }

    let name = presentationItem.name;
    let owner = presentationItem.author || presentationItem.artist_name;
    let artwork = presentationItem.image_url;
    let artist = presentationType === "Albums" ? presentationItem.artist : null;
    let description = presentationType === "Playlists" ? presentationItem.description : null;
    let deleteBtn = presentationType === "Playlists" ? (<button onClick={this.handleDeletePlaylist}>Delete Playlist</button>) : null;

    let options = presentationType === "Playlists" ? (
          <div className="options-container">

             <div className="placeholder-object"></div>

             <div onClick={this.handleOptions} className="option-btns">
               <div className="white-circles"></div>
               <div className="white-circles"></div>
               <div className="white-circles"></div>
             </div>

             <div className={this.state.menuOpen ? "options-menu-open" : "options-menu-close"}>
               <ul>
                 <li onClick={this.handleDeletePlaylist}>Delete playlist</li>
                 <li onClick={this.openEditForm}>Edit Playist</li>
               </ul>
             </div>

           </div>) : null;

    let songs = presentationType === "Playlists" ? this.state.songs.sort(this.sortByPlaylistOrd) : this.state.songs.sort(this.sortByAlbumOrd);

    songs = this.state.songs.length ? this.state.songs.map((song, idx) => {
      let order = presentationType === "Albums" ? song.album_ord : song.playlist_ord;

      return(
        <div className="song-list-item-container">
          <SongItem
            song={song}
            order={order}
            removeCurrentSong={this.props.removeCurrentSong}
            fetchSong={this.props.fetchSong}
            playCurrentSong={this.props.playCurrentSong}
            pauseCurrentSong={this.props.pauseCurrentSong}
            stopCurrentSong={this.props.stopCurrentSong}
            currentSongStatus={this.props.currentSongStatus}
            currentSong={this.props.currentSong}
            key={idx}
            idx={idx}/>
          <p id="song-list-item-duration">{this.convertInToTime(song.duration)}</p>
        </div>
      );
    }) : null;

    return (
        <div className="album-show">
          <div className="album-show-description">
            <img src={artwork}/>
            <h1>{name}</h1>
            <p className="playlist-description">{description}</p>
            <p>By <Link onClick={this.handleSelect(artist, "Artists")} id="artist-link">{owner}</Link></p>
            <p id="album-song-count">{songs ? `${songs.length} SONGS` : null}</p>
            <button onClick={this.handleAddSongsToQueu}>Play</button>
             {options}
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

  renderDefault(){
    return (
      <div className="featured-content">
        <h1>Featured Albums of the Day</h1>
        <SimpleSliderContainer />
      </div>
    );
  }


  render(){

    const editForm = this.state.editFormOpen ? (<PlaylistEditFormContainer currentPlaylist={this.props.presentationItem.item}/>) : null;
    const presentationItem = this.props.presentationItem.item ? this.props.presentationItem : null;
    let showPage = presentationItem ? this.renderPresentation(presentationItem) : this.renderDefault();
    return(
      <div className="center-content">
        {showPage}
        {editForm}
      </div>
    );
  }
}

export default Presentation;
