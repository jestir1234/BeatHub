import React from 'react';
import Sound from 'react-sound';

class SoundComponent extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Sound url="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" playStatus={Sound.status.PLAYING}/>
    );
  }
}

export default SoundComponent;
