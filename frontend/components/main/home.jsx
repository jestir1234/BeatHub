import React from 'react';
import { withRouter } from 'react-router';
import SearchIndexContainer from './center/search_index_container';
import UserMusicIndex from './left/user_music_index.jsx';
import FollowedFriendsIndex from './right/followed_friends_index';
import AudioPlayerContainer from './bottom/audio_player_container';
import HeaderContainer from './top/header_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const user = this.props.currentUser;
    return(
      <div className="main-page-container">

          <HeaderContainer />

          <UserMusicIndex />

          <SearchIndexContainer />

          <FollowedFriendsIndex />

          <AudioPlayerContainer />

      </div>
    );
  }
}

export default withRouter(Home);
