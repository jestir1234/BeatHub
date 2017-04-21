import React from 'react';

const SongItem = (props) => {

  return (
    <li className="song-list-item">

      <div className="song-item-play-btn-container">
        <button><div id="triangle-test"></div></button>
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
