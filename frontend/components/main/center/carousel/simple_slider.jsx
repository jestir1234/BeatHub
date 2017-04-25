import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

class SimpleSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {featured: null};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchRandomAlbums();
  }

  componentWillReceiveProps(newProps){
    if (newProps.featuredAlbums){
      this.setState({featured: newProps.featuredAlbums});
    }
  }

  handleClick(item, categoryName){
    return (e) => {
      e.preventDefault();
      this.props.receivePresentationItem(item, categoryName);
    };
  }

  render() {
    let featured = this.state.featured ? this.state.featured.map((item, idx) => {
      return (
        <div className="featured-carousel" key={idx}>
        <img src={item.image_url}/>
        <p onClick={this.handleClick(item, "Albums")} className="featured-album-name">{item.name}</p>
        <p className="featured-artist-name">By {item.artist_name}</p>
        </div>);
    }) : (<div></div>);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider className="carousel-slider" {...settings}>
      {featured}
      </Slider>
    );
  }
}

export default SimpleSlider;
