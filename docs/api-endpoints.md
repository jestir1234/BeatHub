# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/songs`
  - index of all songs for an album

### Artists

- `GET /api/artists`
- `POST /api/artists`
- `GET /api/artists/:id`
- `DELETE /api/artists/:id`
- `GET /api/artists/:id/albums`
  - index of all albums for an artist
- `GET /api/artists/:id/follows`
  - index of all followers for an artist

### Playlists

- `GET /api/users/:id/playlists`
  - index of all playlists for a user
- `GET /api/users/:id/playlists/:id`
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `DELETE /api/playlists/:id`

### Follows

- `GET /api/users/:id/follows`
  - index of all followers for user.
- `POST /api/follows`
- `GET /api/users/:id/follows/:id`
- `DELETE /api/follows`
