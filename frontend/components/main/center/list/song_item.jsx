import React from 'react';
import Sound from 'react-sound';
import SoundComponent from '../../bottom/sound_component';


const handleClick = (props) => {
  return (e) => {
    e.preventDefault();
    
    if (e.target.id === "triangle-test") {
      e.target.setAttribute("id", "pause");
    } else if (e.target.id === "pause") {
      e.target.setAttribute("id", "triangle-test");
    }
    props.removeCurrentSong();
    props.fetchSong(props.song.id);
  };
};

// const handlePlay = (song) => {
//   props.removeCurrentSong();
//   props.fetchSong(song.id);
// };
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
