import React from 'react';

const SongItem = (props) => {

  return (
    <li className="song-list-item"><span id="song-order">{props.song.album_ord}.</span> {props.song.name}</li>
  );
};

export default SongItem;
