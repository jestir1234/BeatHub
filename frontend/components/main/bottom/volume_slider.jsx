import React from 'react';
import Slider from 'react-rangeslider';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value){
    this.setState({
      volume: value
    });
  }

  render() {
    let volume = this.state.volume;
    return (
      <Slider
        value={volume}
        orientation="vertical"
        onChange={this.handleOnChange}
      />
  );
  }
}

export default VolumeSlider;
