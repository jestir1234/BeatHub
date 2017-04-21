import React from 'react';
import { withRouter } from 'react-router';
import PresentationContainer from './center/presentation_container';
import UserMusicIndex from './left/user_music_index.jsx';
import FollowedFriendsIndex from './right/followed_friends_index';
import AudioPlayerContainer from './bottom/audio_player_container';
import HeaderContainer from './top/header_container';

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

    return(
      <div className="main-page-container">

          <HeaderContainer />

          <UserMusicIndex />

          <PresentationContainer presentationInfo={presentationInfo}/>

          <FollowedFriendsIndex />

          <AudioPlayerContainer />

      </div>
    );
  }
}

export default withRouter(Home);
