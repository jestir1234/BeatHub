import React from 'react';
import SoundComponent from './sound_component';

class AudioPlayer extends React.Component{
  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
  }

  playSong(props){
    return(
        <SoundComponent song={props.currentSong} songStatus={props.currentSongStatus} updatePositionAndDuration={props.updatePositionAndDuration}/>
    );
  }

  render(){
    
    const currentSong = this.props.currentSong ? this.props.currentSong : null;
    const playSong = currentSong ? this.playSong(this.props) : null;

    return(
      <div className="bottom-content">
        <h1>{currentSong ? `${currentSong.name} is currently playing...` : "No songs playing"}</h1>
        {playSong}
      </div>
    );
  }
}

export default AudioPlayer;
