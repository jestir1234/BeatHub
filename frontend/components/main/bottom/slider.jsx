import React from 'react';
import Slider, { Range } from 'rc-slider';


class AudioSlider extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="audio-slider">
        <Slider max={100} min={0} />
        <Range />
      </div>
    );
  }

}

export default AudioSlider;
