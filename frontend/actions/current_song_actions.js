export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const STOP_CURRENT_SONG = "STOP_CURRENT_SONG";
export const UPDATE_POSITION_AND_DURATION = "UPDATE_POSITION_AND_DURATION";

export const playCurrentSong = (positionAndDuration) => {
  return {
    type: PLAY_CURRENT_SONG,
    status: "PLAY",
    positionAndDuration
  };
};

export const pauseCurrentSong = (positionAndDuration) => {
  return {
    type: PAUSE_CURRENT_SONG,
    status: "PAUSE",
    positionAndDuration
  };
};

export const stopCurrentSong = (positionAndDuration) => {
  return {
    type: STOP_CURRENT_SONG,
    status: "STOP",
    positionAndDuration
  };
};

export const updatePositionAndDuration = (positionAndDuration) => {
  return {
    type: UPDATE_POSITION_AND_DURATION,
    positionAndDuration
  };
};
