import React from 'react';


class SearchResultsDropDown extends React.Component {
  constructor(props){
    super(props);

    this.constructList = this.constructList.bind(this);
  }

  constructList(category, categoryName){
    const listItems = category.map((item, idx) => {
      return (<li key={idx}>{item.name}</li>);
    });

    return (
      <div>
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

    return (
      <div className="search-results-dropdown-container">
        {artistList}
        {albumList ? albumList : null}
        {songList ? songList : null}
      </div>
    );
  }
}

export default SearchResultsDropDown;
