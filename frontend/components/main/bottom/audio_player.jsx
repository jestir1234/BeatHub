import React from 'react';
import SoundComponent from './sound_component';
import { Line, Circle } from 'rc-progress';
import merge from 'lodash/merge';



class AudioPlayer extends React.Component{
  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
    this.convertInToTime = this.convertInToTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {buttonStyle: 'play-arrow', queu: this.props.queu.songQueu, currentSongPlaying: null, newPositionAndDuration: null, newVolume: null, shuffleStatus: false};
    this.handleSkip = this.handleSkip.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleRepeatCurrentSong = this.handleRepeatCurrentSong.bind(this);
  }

  componentWillReceiveProps(newProps){

    if (!newProps.currentSong){
      if (newProps.queu.songQueu.length > 0){
        let queu = newProps.queu.songQueu;
        let nextSong = queu[0];
        this.props.receiveCurrentSong(nextSong);
        this.props.removeSongFromQueu();
        this.props.playCurrentSong();
      }
    }

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

  handleRepeatCurrentSong(e){
    this.props.pushSongToFront(this.props.currentSong);
  }



  shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
    return array;
  }

  handleShuffle(e){
    if (this.props.queu.songQueu.length){
      let shuffledQueue = this.shuffle(this.props.queu.songQueu);
      let newState = merge({}, this.state, {shuffleStatus: true});
      this.props.replaceQueuSongs(shuffledQueue);
      this.setState(newState);
    }
  }

  handleSlider(e){
    let $bar = $('#audioBar');
    let offset = $bar.offset();
    let currentPos = e.pageX - offset.left;
    let totalBarWidth = $bar.width();
    let percent = (currentPos / totalBarWidth);
    if (this.props.currentSongStatus.positionAndDuration){
      let newPositionAndDuration = this.props.currentSongStatus.positionAndDuration;
      let duration = newPositionAndDuration.duration;
      newPositionAndDuration.position =  duration * percent;
      let newState = merge({}, this.state, {newPositionAndDuration: newPositionAndDuration});
      this.setState(newState);
    }
    // let currentPosition = newPositionAndDuration.position;
  }

  handleVolume(e){
    let volumeBar = document.getElementById('volumeBar');
    let value = volumeBar.value;
    let percent = value / volumeBar.max;

    let newPositionAndDuration = this.props.currentSongStatus.positionAndDuration;
    newPositionAndDuration.volume = 100 * percent;
    let newState = merge({}, this.state, {newPositionAndDuration: newPositionAndDuration}, {newVolume: newPositionAndDuration.volume});
    this.setState({newState});
  }

  handleRestart(e){
    e.preventDefault();
    let newPositionAndDuration = this.props.currentSongStatus.positionAndDuration;
    newPositionAndDuration.position = 0;
    let newState = merge({}, this.state, {newPositionAndDuration: newPositionAndDuration});
    this.setState(newState);
  }

  handleSkip(e){
    e.preventDefault();

    let nextSong = this.props.queu.songQueu[0];
    this.props.receiveCurrentSong(nextSong);
    this.props.removeSongFromQueu();
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
    return(
      <SoundComponent song={currentSong} songStatus={props.currentSongStatus} updatePositionAndDuration={props.updatePositionAndDuration} removeCurrentSong={props.removeCurrentSong} newVolume={this.state.newVolume}/>
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

    let currentSong = this.props.currentSong;

    const playSong = currentSong ? this.playSong(this.props, currentSong) : null;
    const positionAndDuration = this.props.currentSongStatus.positionAndDuration ? this.props.currentSongStatus.positionAndDuration : null;

    let artist = currentSong ? currentSong.artist.name : null;

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
    let song_img = currentSong ? (<img src={currentSong.image_url}/>) : null;

    let marqueeStatus;
    if (this.props.currentSongStatus.status === "PLAY") {
      marqueeStatus = "playing...";
    } else if (this.props.currentSongStatus.status === "PAUSE") {
      marqueeStatus = "paused...";
    }

    return(
      <div className="bottom-content">

        <div className="current-song-info">
          <div className="album-art-thumbnail">
            {song_img}
          </div>
          <marquee><h1>{currentSong ? `${currentSong.name} by ${artist} is currently ${marqueeStatus} ${this.state.shuffleStatus ? "(shuffle on)" : ""}` : ""}</h1></marquee>
        </div>
        {playSong}

        <div className="audio-display">

          <div className="play-controls">
              <button onClick={this.handleShuffle} className="shuffle-btn"></button>
              <button onClick={this.handleRestart} className="skip-btn"><div className="arrow-left"></div></button>
              <button onClick={this.handleClick(this.props)}className="play-btn"><div id={this.state.buttonStyle}></div></button>
              <button onClick={this.handleSkip} className="skip-btn"><div className="arrow-right"></div></button>
              <button onClick={this.handleRepeatCurrentSong} className="repeat-btn"></button>
            </div>
            <div className="status-bar-container">
              <p id="time-passed">{timePassed}</p>
              <div className="status-bar">
                <Line id="audioBar" onClick={this.handleSlider} percent={completionPercentage} strokeLinecap='round' strokeWidth=".5" strokeColor="#a0a0a0" trailWidth="1" trailColor="#404040" />
              </div>
              <p id="time-left">{timeLeft}</p>
            </div>

        </div>


        <div className="volume-control">
          <div className="volume-icon">
          </div>
          <div className="volume-bar">
            <input id="volumeBar" onMouseUp={this.handleVolume} type="range" defaultValue="100" min="0" max="100" />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
