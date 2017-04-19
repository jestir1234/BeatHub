# BeatHub


[Heroku link](https://beat-hub-app.herokuapp.com) **Note:** This should be a link to your production site

[Trello link](https://trello.com/b/GiRkKhjn/beathub)

## Minimum Viable Product


BeatHub is a web application inspired by Spotify built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song/Playlist CRUD
- [ ] Search
- [ ] Continuous play while navigating site
- [ ] Following playlists/Friending users
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: User Model, API, and components (2 days)

**Objective:** User can be created, edited, destroyed through API.

### Phase 3: Artists, Albums, Songs (3 days)

**Objective:**
  - Artists can be created, edited and destroyed by admin. They are searchable.
  - Albums can be created, edited and destroyed by admin. Albums belong to Artists. They are searchable.
  - Songs can be created, edited and destroyed by admin. Songs belong to Albums and Artists. They are searchable.
  - Songs are playable with interactive audio bar that can play, pause, and stop.

### Phase 4: Playlist (1 day)

**Objective:**
  - Playlists belong to users, and can be created, edited, and destroyed. They are searchable.
  - Songs can belong to playlists through SongPlaylist table.

### Phase 5: Follows (2 days)

**Objective:** Users can follow playlists, artists other users through API.

### Phase 6: - Continuous play while navigating (2 days)


**Objective:** Continuous play while navigating site.

### Bonus Features (TBD)
- [ ] Radio play (shuffle play
- [ ] Explore page
- [ ] Repeat, skip functionality.
- [ ] Listening parties (created by users, contain users).
- [ ] Chat feature for listening parties.
