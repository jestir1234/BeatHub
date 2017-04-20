import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchText: ""};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    this.setState({searchText: e.target.value});
  }



  render(){
    return(
      <div className="search-bar-container">
        <i className="inside fa fa-search" aria-hidden="true"></i>
        <input id="search-bar" type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleInput}/>
      </div>
    );
  }
}

export default SearchBar;
