import React from 'react';
import Sound from 'react-sound';

class SoundComponent extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Sound url={`${this.props.song.audio_url}`} playStatus={Sound.status.PLAYING}/>
    );
  }
}

export default SoundComponent;
