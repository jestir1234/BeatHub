import React from 'react';
import { Link, withRouter } from 'react-router';


class SearchResultsDropDown extends React.Component {
  constructor(props){
    super(props);

    this.constructList = this.constructList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.searchResults === this.props.searchResults) {
      return false;
    } else {
      return true;
    }
  }

  handleClick(item, categoryName){
    return (e) => {
      e.preventDefault();
      this.props.receivePresentationItem(item, categoryName);
      this.props.receiveAlbum(item);
      this.props.removeSearchResults();
    };
  }

  constructList(category, categoryName){
    const listItems = category.map((item, idx) => {
      if (categoryName === "Songs"){
        return (
          <li key={idx}>
            <Link onClick={this.handleClick(item.album, "Albums")}>
              <span className="list-item-song">{item.name}</span>
            </Link>
          </li>
        );
      } else if (categoryName === "Albums") {
        return (
          <li key={idx}>
            <Link onClick={this.handleClick(item, categoryName)}>
              <img src={item.image_url}/>
              <span className="list-item-padding">{item.name}</span>
            </Link>
          </li>
        );
      } else if (categoryName === "Artists") {
        return (
          <li key={idx}>
            <div className="list-item-artist">
              <img src={item.image_url}/>
            </div>
            <span className="list-item-padding">{item.name}</span>
          </li>
        );
      }
    });

    return (
      <div className="search-items-container">
        <h3>{categoryName}</h3>
        <ul>{listItems}</ul>
        <br/>
      </div>
    );
  }

  render(){
    const searchResults = this.props.searchResults;

    const artists = searchResults.artists || [];
    const albums = searchResults.albums || [];
    const songs = searchResults.songs || [];

    let artistList;
    let albumList;
    let songList;

    if (Object.keys(searchResults).length) {
      artistList = artists.length > 0 ? this.constructList(artists, "Artists") : null;
      albumList = albums.length > 0 ? this.constructList(albums, "Albums") : null;
      songList = songs.length > 0 ? this.constructList(songs, "Songs") : null;
    }

    let dropdown;

    document.addEventListener("click", (e) => {
      dropdown = document.getElementsByClassName('search-results-dropdown-container')[0];
      if (e.path.includes(dropdown) || e.target.id === 'search-bar'){
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });

    return (
      <div className="search-results-dropdown-container">
        {artistList}
        {albumList ? albumList : null}
        {songList ? songList : null}
      </div>
    );
  }
}

export default withRouter(SearchResultsDropDown);
