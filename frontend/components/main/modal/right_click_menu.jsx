import React from 'react';

class RightClickMenu extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
      <div className="fast-modal" id="right-click-menu-container">
        <p>Add song to playlist</p>
        <p>Remove song from playlist</p>
      </div>
    );
  }
}

export default RightClickMenu;
