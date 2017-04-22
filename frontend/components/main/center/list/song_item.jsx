import React from 'react';
import Sound from 'react-sound';
import SoundComponent from '../../bottom/sound_component';


const handleClick = (props) => {
  return (e) => {
    e.preventDefault();

    if (e.target.id === "triangle-test") {
      e.target.setAttribute("id", "pause");
      handlePlay(props);
    } else if (e.target.id === "pause") {
      e.target.setAttribute("id", "triangle-test");
      handlePause(props);
    }
  };
};

const handlePlay = (props) => {

  if (props.currentSongStatus.positionAndDuration && props.currentSong.id === props.song.id){
    props.playCurrentSong(props.currentSongStatus.positionAndDuration.position);
  } else {
    props.removeCurrentSong();
    props.fetchSong(props.song.id);
    props.playCurrentSong(null);
  }

};

const handlePause = (props) => {
  props.pauseCurrentSong();
};

//
// const handlePause = (song) => {
//
// };

const SongItem = (props) => {

  return (
    <li className="song-list-item">

      <div className="song-item-play-btn-container">
        <button onClick={handleClick(props)}><div id="triangle-test"></div></button>
      </div>

      <div className="song-item-order-container">
        <span id="song-order">{props.song.album_ord}.</span>
      </div>

      <div className="song-item-song-name">
        <p>{props.song.name}</p>
      </div>

    </li>
  );
};

export default SongItem;
