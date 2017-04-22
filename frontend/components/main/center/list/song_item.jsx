import React from 'react';
import Sound from 'react-sound';
import SoundComponent from '../../bottom/sound_component';

class SongItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {buttonStyle: "triangle-test"};
  }

  componentWillReceiveProps(newProps){
    let buttonStyle;
    if (newProps.currentSong) {
      buttonStyle = newProps.currentSong.id === this.props.song.id ? "pause" : "triangle-test";
      this.setState({buttonStyle: buttonStyle});
    }
  }

  handleClick(props){
    return (e) => {
      e.preventDefault();

      if (e.target.id === "triangle-test") {
        e.target.setAttribute("id", "pause");
        this.handlePlay(props);
      } else if (e.target.id === "pause") {
        e.target.setAttribute("id", "triangle-test");
        handlePause(props);
      }
    };
  }

  handlePlay(props){
    if (props.currentSongStatus.positionAndDuration && props.currentSong.id === props.song.id){
      props.playCurrentSong(props.currentSongStatus.positionAndDuration.position);
    } else {
      props.removeCurrentSong();
      props.fetchSong(props.song.id);
      props.playCurrentSong(null);
    }
  }

  handlePause(props){
    props.pauseCurrentSong();
  }


  render(){

    let props = this.props;

    return(
      <li className="song-list-item">

        <div className="song-item-play-btn-container">
          <button onClick={this.handleClick(props)}><div id={this.state.buttonStyle}></div></button>
        </div>

        <div className="song-item-order-container">
          <span id="song-order">{props.song.album_ord}.</span>
        </div>

        <div className="song-item-song-name">
          <p>{props.song.name}</p>
        </div>

      </li>
    );
  }

}

// const handleClick = (props) => {
//   return (e) => {
//     e.preventDefault();
//
//     if (e.target.id === "triangle-test") {
//       e.target.setAttribute("id", "pause");
//       handlePlay(props);
//     } else if (e.target.id === "pause") {
//       e.target.setAttribute("id", "triangle-test");
//       handlePause(props);
//     }
//   };
// };

// const handlePlay = (props) => {
//
//   if (props.currentSongStatus.positionAndDuration && props.currentSong.id === props.song.id){
//     props.playCurrentSong(props.currentSongStatus.positionAndDuration.position);
//   } else {
//     props.removeCurrentSong();
//     props.fetchSong(props.song.id);
//     props.playCurrentSong(null);
//   }
//
// };

// const handlePause = (props) => {
//   props.pauseCurrentSong();
// };

//
// const SongItem = (props) => {
//   let buttonStyle = props.currentSong.id === props.song.id ? "pause" : "triangle-test";
//   return (
//     <li className="song-list-item">
//
//       <div className="song-item-play-btn-container">
//         <button onClick={handleClick(props)}><div id={buttonStyle}></div></button>
//       </div>
//
//       <div className="song-item-order-container">
//         <span id="song-order">{props.song.album_ord}.</span>
//       </div>
//
//       <div className="song-item-song-name">
//         <p>{props.song.name}</p>
//       </div>
//
//     </li>
//   );
// };

export default SongItem;
