# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url         | string    |

## UserFollows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign_key {references users}, indexed
follower_id     | integer   | not null, foreign_key {references users}, indexed

## ArtistFollows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign_key {references users}, indexed
artist_id       | integer   | not null, foreign_key {references artists}, indexed

## Artists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
genre           | string    | not null
image_url         | string    | not null

## Albums
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
artist_id       | integer   | not null, foreign_key {references artists}
year            | integer   | not null
image_url         | string    | not null

## Songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
album_id        | integer   | not null, foreign_key {references albums}
album_ord       | integer   | not null
audio_url       | string    | not null
genre           | string    |


## Playlists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
author_id       | integer   | not null, foreign_key {references users}

## PlaylistSongs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
song_id         | integer   | not null, foreign_key {references songs}
playlist_id     | integer   | not null, foreign_key {references playlist}
ord             | integer   | not null

## PlaylistFollows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
playlist_id     | integer   | not null, foreign_key {references playlist}
follower_id     | integer   | not null, foreign_key {references users}
