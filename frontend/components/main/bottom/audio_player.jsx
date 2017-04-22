import React from 'react';
import SoundComponent from './sound_component';
import { Line, Circle } from 'rc-progress';

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

        <div className="audio-display">
            <div className="play-controls">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className="status-bar">
              <p>time passed</p>
              <Line percent="65" strokeWidth="1" strokeColor="green" trailWidth="1"/>
              <p>time left</p>
            </div>

        </div>


        <div className="volume-control">
          <p>volume controls here</p>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
