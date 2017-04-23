import React from 'react';
import { withRouter } from 'react-router';
import PresentationContainer from './center/presentation_container';
import UserMusicIndex from './left/user_music_index.jsx';
import FollowedFriendsIndex from './right/followed_friends_index';
import AudioPlayerContainer from './bottom/audio_player_container';
import HeaderContainer from './top/header_container';
import PlaylistFormContainer from './modal/playlist_form_container';

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
      <div className="main-page-container">

          <HeaderContainer />

          <UserMusicIndex />

          <PresentationContainer presentationInfo={presentationInfo} songs={this.props.songs} currentSong={currentSong}/>

          <FollowedFriendsIndex />

          <AudioPlayerContainer currentSong={currentSong}/>

          <PlaylistFormContainer />
      </div>
    );
  }
}

export default withRouter(Home);
