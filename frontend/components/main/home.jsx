import React from 'react';
import { withRouter } from 'react-router';
import PresentationContainer from './center/presentation_container';
import UserMusicIndexContainer from './left/user_music_index_container';
import FollowedFriendsIndexContainer from './right/followed_friends_index_container';
import AudioPlayerContainer from './bottom/audio_player_container';
import HeaderContainer from './top/header_container';
import PlaylistFormContainer from './modal/playlist_form_container';


const COLORS = ["dark-gradient-maroon", "dark-gradient-yellow", "dark-gradient-green", "dark-gradient-blue"];

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {presentationInfo: null};
  }

  componentWillReceiveProps(nextProps){

  }


  render(){

    const user = this.props.currentUser;
    const presentationInfo = this.props.album ? this.props.album : null;
    const currentSong = this.props.currentSong ? this.props.currentSong : null;

    return(
      <div className="main-page-container" id={COLORS[Math.floor(Math.random() * COLORS.length)]}>

          <HeaderContainer />

          <UserMusicIndexContainer />

          <PresentationContainer presentationInfo={presentationInfo} songs={this.props.songs} currentSong={currentSong}/>

          <FollowedFriendsIndexContainer />

          <AudioPlayerContainer currentSong={currentSong} />

          <PlaylistFormContainer />
      </div>
    );
  }
}

export default withRouter(Home);
