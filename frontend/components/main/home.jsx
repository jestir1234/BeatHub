import React from 'react';
import { withRouter } from 'react-router';
import SearchIndexContainer from './center/search_index_container';
import UserMusicIndex from './left/user_music_index.jsx';
import FollowedFriendsIndex from './right/followed_friends_index';
import AudioPlayerContainer from './bottom/audio_player_container';
import Header from './top/header';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const user = this.props.currentUser;
    return(
      <div className="main-page-container">
        <h3>WELCOME {user ? user.username : ""} (this is the home component h3 tag, soon to be replaced by the SearchProfile menu component)<button onClick={() => this.props.logout().then(() => this.props.router.push('/login'))}>Log Out</button></h3>

        <div className="top-content">
          <Header />
        </div>

        <div className="left-content">
          <UserMusicIndex />
        </div>

        <div className="center-content">
          <SearchIndexContainer />
        </div>

        <div className="right-content">
          <FollowedFriendsIndex />
        </div>

        <div className="bottom-content">
          <AudioPlayerContainer />
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
