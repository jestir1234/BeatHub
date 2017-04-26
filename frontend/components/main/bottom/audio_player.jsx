import React from 'react';
import SoundComponent from './sound_component';
import { Line, Circle } from 'rc-progress';
import VolumeSlider from './volume_slider';
import merge from 'lodash/merge';


class AudioPlayer extends React.Component{
  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {buttonStyle: 'play-arrow', queu: this.props.queu.songQueu, currentSongPlaying: null};
    this.handleSkip = this.handleSkip.bind(this);
  }

  componentWillReceiveProps(newProps){
    debugger
    if (!newProps.currentSong){
      if (newProps.queu.songQueu.length > 0){
        let queu = newProps.queu.songQueu;
        let nextSong = queu[0];
        this.setState({buttonStyle: this.state.buttonStyle, currentSongPlaying: nextSong});
        this.props.receiveCurrentSong(nextSong);
        this.props.removeSongFromQueu();
        this.props.playCurrentSong();
      }
    } else if (newProps.currentSong !== this.state.currentSongPlaying){
      this.setState({buttonStyle: this.state.buttonStyle, queu: this.state.queu, currentSongPlaying: newProps.currentSong});
    }

    //handles initializing currentsong and queu
    // if (!this.state.currentSongPlaying)
    //
    // if (this.state.currentSongPlaying !== newProps.currentSong){
    //   let newState = merge({}, this.state, {currentSongPlaying: newProps.currentSong});
    // }
    //
    // if (newProps.queu.songQueu.length !== this.state.queu){
    //   this.setState({buttonStyle: this.state.buttonStyle, queu: newProps.queu.songQueu, currentSongPlaying: this.state.currentSongPlaying});
    // }

    // below handles pause play
    if (newProps.currentSong && this.props.currentSong !== newProps.currentSong) {
      if (newProps.currentSongStatus.status === "PLAY") {
        this.setState({buttonStyle: "pause", queu: this.state.queu, currentSongPlaying: this.state.currentSongPlaying});
      } else if (newProps.currentSongStatus === "PAUSE") {
        this.setState({buttonStyle: "play-arrow", queu: this.state.queu, currentSongPlaying: this.state.currentSongPlaying});
      }
    } else if (newProps.currentSong && this.props.currentSong === newProps.currentSong) {
      if (newProps.currentSongStatus.status === "PAUSE") {
        this.setState({buttonStyle: "play-arrow", queu: this.state.queu, currentSongPlaying: this.state.currentSongPlaying});
      } else if (newProps.currentSongStatus.status === "PLAY") {
        this.setState({buttonStyle: "pause", queu: this.state.queu, currentSongPlaying: this.state.currentSongPlaying});
      }
    }
  }

  handleSkip(e){
    e.preventDefault();

    let nextSong = this.props.queu.songQueu[0];
    this.props.receiveCurrentSong(nextSong);
    this.props.removeSongFromQueu();
    debugger
  }

  handleClick(props) {

    return (e) => {
      e.preventDefault();
      if (props.currentSongStatus.status === null) {
        this.handlePlay(props);
      } else if (props.currentSongStatus.status === "PLAY"){
        this.handlePause(props);
      } else if (props.currentSongStatus.status === "PAUSE"){
        this.handlePlay(props);
      }
    };
  }



  handlePlay(props){
    if (props.currentSongStatus.positionAndDuration){
      props.playCurrentSong(props.currentSongStatus.positionAndDuration.position);
      this.setState({buttonStyle: "pause"});
    } else if (props.currentSong) {
      props.removeCurrentSong();
      props.fetchSong(props.song.id);
      props.playCurrentSong(null);
      this.setState({buttonStyle: "pause"});
    }

  }

  handlePause(props){
    props.pauseCurrentSong();
    this.setState({buttonStyle: "play-arrow"});
  }

  playSong(props, currentSong){
    console.log(currentSong.name);
    return(
      <SoundComponent song={currentSong} songStatus={props.currentSongStatus} updatePositionAndDuration={props.updatePositionAndDuration}/>
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

    let currentSong = this.state.currentSongPlaying;
    const playSong = currentSong ? this.playSong(this.props, currentSong) : null;
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
              <button className="shuffle-btn"></button>
              <button className="skip-btn"><div className="arrow-left"></div></button>
              <button onClick={this.handleClick(this.props)}className="play-btn"><div id={this.state.buttonStyle}></div></button>
              <button onClick={this.handleSkip} className="skip-btn"><div className="arrow-right"></div></button>
              <button className="repeat-btn"></button>
            </div>
            <div className="status-bar-container">
              <p id="time-passed">{timePassed}</p>
              <div className="status-bar">
                <Line percent={completionPercentage} strokeLinecap='round' strokeWidth=".5" strokeColor="#a0a0a0" trailWidth="1" trailColor="#404040" />
              </div>
              <p id="time-left">{timeLeft}</p>
            </div>

        </div>


        <div className="volume-control">
          <div className="volume-icon">
          </div>
          <div className="volume-bar">
            <Line percent="50" strokeLinecap='round' strokeWidth='3' strokeColor="green" trailWidth="2" trailColor="#404040"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
