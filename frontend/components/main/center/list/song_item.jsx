import React from 'react';
import Sound from 'react-sound';
import SoundComponent from '../../bottom/sound_component';


const handlePlay = (props) => {
  return (e) => {
    e.preventDefault();
    
    props.removeCurrentSong();
    props.fetchSong(props.song.id);
  };
};

const SongItem = (props) => {

  return (
    <li className="song-list-item">

      <div className="song-item-play-btn-container">
        <button onClick={handlePlay(props)}><div id="triangle-test"></div></button>
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
