import React from 'react';
import SoundComponent from './sound_component';
import { Line, Circle } from 'rc-progress';

class AudioPlayer extends React.Component{
  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount(){
    // Update play-arrow if song was played elsewhere
    let playBtn = document.getElementsByClassName('play-btn')[0];
    let inner = playBtn.children[0];
    if (this.props.currentSong && inner.id === 'play-arrow') {
      inner.setAttribute("id", "pause");
    }
  }

  componentWillReceiveProps(newProps){
    let playBtn = document.getElementsByClassName('play-btn')[0];
    let inner = playBtn.children[0];
    if (newProps.currentSong && inner.id === "play-arrow" && newProps.currentSongStatus.status === "PLAY") {
      inner.setAttribute("id", "pause");
    } else if (newProps.currentSongStatus.status === "PAUSE"){
      inner.setAttribute("id", "play-arrow");
    }
  }

  handleClick(props) {
    let inner;
    let button;
    return (e) => {
      button = document.getElementsByClassName("play-btn")[0];
      inner = button.children[0];
      e.preventDefault();
      if (e.target === inner) {
        if (inner.id === "play-arrow"){
          inner.setAttribute("id", "pause");
          this.handlePlay(props);
      } else if (inner.id === "pause") {
          inner.setAttribute("id", "play-arrow");
          this.handlePause(props);
        }
      }
    };
  }

  handlePlay(props){
    if (props.currentSongStatus.positionAndDuration){
      props.playCurrentSong(props.currentSongStatus.positionAndDuration.position);
    } else if (props.currentSong) {
      props.removeCurrentSong();
      props.fetchSong(props.song.id);
      props.playCurrentSong(null);
    }

  }

  handlePause(props){
    props.pauseCurrentSong();
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
              <button>shuffle</button>
              <button>back</button>
              <button onClick={this.handleClick(this.props)}className="play-btn"><div id="play-arrow"></div></button>
              <button>forward</button>
              <button>repeat</button>
            </div>
            <div className="status-bar-container">
              <p id="time-passed">{timePassed}</p>
              <div className="status-bar">
                <Line percent={completionPercentage} strokeWidth=".5" strokeColor="green" trailWidth="1"/>
              </div>
              <p id="time-left">{timeLeft}</p>
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
