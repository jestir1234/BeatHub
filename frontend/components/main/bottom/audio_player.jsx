import React from 'react';
import SoundComponent from './sound_component';
import { Line, Circle } from 'rc-progress';

class AudioPlayer extends React.Component{
  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
  }

  playSong(props){
    return(
        <SoundComponent song={props.currentSong} songStatus={props.currentSongStatus} updatePositionAndDuration={props.updatePositionAndDuration}/>
    );
  }

  convertInToTime(duration){
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    if (seconds < 10){
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  render(){

    const currentSong = this.props.currentSong ? this.props.currentSong : null;
    const playSong = currentSong ? this.playSong(this.props) : null;
    const positionAndDuration = this.props.currentSongStatus.positionAndDuration ? this.props.currentSongStatus.positionAndDuration : null;

    let completionPercentage = 0;
    let interval = 0;
    let timePassed = 0;
    let timeLeft = 0;
    if (positionAndDuration) {
      completionPercentage = ((positionAndDuration.position / positionAndDuration.duration) * 100 );
      interval = (positionAndDuration.position / 1000);
      timeLeft = (positionAndDuration.duration / 1000) - interval;
    }
    timePassed = this.convertInToTime(interval);
    timeLeft = this.convertInToTime(timeLeft);

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
              <p>{timePassed}</p>
              <Line percent={completionPercentage} strokeWidth="1" strokeColor="green" trailWidth="1"/>
              <p>{timeLeft}</p>
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
