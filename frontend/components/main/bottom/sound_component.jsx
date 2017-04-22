import React from 'react';
import Sound from 'react-sound';

class SoundComponent extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    const playing = Sound.status.PLAYING;
    return(
      <Sound url={`${this.props.song.audio_url}`} playStatus={playing}/>
    );
  }
}

export default SoundComponent;
