import React from 'react';

class FollowedFriendsIndex extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="right-content">

        <div className="find-friends-container">
          <h1>See what your friends are playing</h1>

          <div className="find-friends-btn-container">
            <button>FIND FRIENDS</button>
          </div>

        </div>

        <div className="friends-index-container">
          FOLLOWED FRIENDS INDEX WILL GO HERE
        </div>

      </div>
    );
  }
}

export default FollowedFriendsIndex;
