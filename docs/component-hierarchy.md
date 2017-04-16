## Component Hierarchy

**SignUpFormContainer**
- SignUpForm

**SignInFormContainer**
- SignInForm

**HomeContainer**
- MainContent (center)
- LeftContent (left)
- FollowedFriendsIndex (right)
- AudioPlayer (bottom)

**MainContentContainer**
- SearchProfile
- Featured
- SearchIndex
- CollectionIndex (aka user's artist, album, artist index)
- UserShow
- UsersIndex
- ArtistPage
- AlbumPage
- PlaylistForm
- PlaylistShow

**ArtistPageContainer**
- AlbumsIndex

**AlbumsIndexContainer**
- AlbumItem

**LeftContentContainer**
- UserMusicIndex
- UserPlaylistIndex


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "SignUpFormContainer" |
| "/sign-in" | "SignInFormContainer" |
| "/home" | "HomeContainer" |
| "/search" | "SearchIndex" |
| "/search/results/searchTerm" | "SearchIndex" |
| "/featured" | "featured" |
| "/collection/songs" | "CollectionIndexContainer" |
| "/collection/albums" | "CollectionIndexContainer" |
| "/collection/artists" | "CollectionIndexContainer" |
| "/collection/playlists" | "PlaylistForm" |
| "/profile/:id" | "UserShow" |
| "/profile/:id/playlist/:id" | "PlaylistShow" |
| "/users" | "UsersIndex" |
| "/artist/:id" | "ArtistPage" |
| "/album/:id" | "AlbumPage" |
