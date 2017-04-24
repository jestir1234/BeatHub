import React from 'react';

class RightClickMenu extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

  }


  render(){
    const playlists = this.props.playlists.map((playlist, idx) => {
      return (<li key={idx} >{[playlist.name]}</li>);
    });

    return (
      <div className="fast-modal" id="right-click-menu-container">
        <div className="right-click-menu-items">
          <p>Add song to playlist</p>
          <p>Remove song from playlist</p>
        </div>
        <div className="menu-playlists">
          <ul>
            {playlists}
          </ul>
        </div>
      </div>
    );
  }
}

export default RightClickMenu;
