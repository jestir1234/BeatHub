import React from 'react';
import SearchResultsDropDown from './search_results_dropdown';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchText: ""};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    setTimeOut(this.setState({searchText: e.target.value}, () => this.props.fetchSearchResults(this.state.searchText)), 100)
  }


  render(){

    return(
      <div className="search-container">
        <div id="search-bar-container">
          <i className="inside fa fa-search" aria-hidden="true"></i>
          <input id="search-bar" type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleInput}/>
        </div>
        <SearchResultsDropDown searchResults={this.props.searchResults} receiveAlbum={this.props.receiveAlbum} receivePresentationItem={this.props.receivePresentationItem} removeSearchResults={this.props.removeSearchResults}/>
      </div>
    );
  }
}

export default SearchBar;
