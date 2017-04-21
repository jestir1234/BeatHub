import React from 'react';

const SongItem = ({song}) => {
  return (
    <li>{song.album_ord} {song.name}</li>
  )
};

export default SongItem;
