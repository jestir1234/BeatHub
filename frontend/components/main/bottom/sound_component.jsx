import React from 'react';
import Sound from 'react-sound';

class SoundComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {status: Sound.status.PLAYING};
  }

  componentDidMount(){
    if (this.props.songStatus.status === "PLAY") {
      this.setState({status: Sound.status.PLAYING});
    } else if (this.props.songStatus.status === "PAUSE") {
      this.setState({status: Sound.status.PAUSED});
    } else if (this.props.songStatus.status === "STOP") {
      this.setState({status: Sound.status.STOPPED});
    } else {
      this.setState({status : null});
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.songStatus.status === "PLAY") {
      this.setState({status: Sound.status.PLAYING});
    } else if (newProps.songStatus.status === "PAUSE") {
      this.setState({status: Sound.status.PAUSED});
    } else if (newProps.songStatus.status === "STOP") {
      this.setState({status: Sound.status.STOPPED});
    } else {
      this.setState({status : null});
    }
  }


  render(){

    let newPositionAndDuration = this.props.songStatus.positionAndDuration ? this.props.songStatus.positionAndDuration : null;

    return(
      <Sound url={`${this.props.song.audio_url}`}
        playFromPosition={newPositionAndDuration ? newPositionAndDuration.position : null}
        playStatus={this.state.status}
        onPlaying={(positionAndDuration) => this.props.updatePositionAndDuration(positionAndDuration)}
        onFinishedPlaying={() => this.props.removeCurrentSong()}/>
    );
  }
}

export default SoundComponent;
