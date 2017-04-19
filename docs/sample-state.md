```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  followers: {
    2: {
      id: 2,
      username: "kobe",
      email: 'kobe@email.com'
    },
    3: {
      id: 3,
      username: "shaq",
      email: "shaq@gmail.com"
    }
  },
  songs: {
    1: {
      id: 1,
      name: "All The Small Things",
      album_id: 1,
      ord: 6
    },
    2: {
      id: 2,
      name: "Adam's song",
      album_id: 1,
      ord: 7
    }
  },
  albums: {
    1: {
      id: 1,
      name: "Enema of the State",
      artist_id: 1,
      year: 1999
    },
    2: {
      id: 2,
      name: "Take off your pant's and jacket",
      artist_id: 1,
      year: 2001
    }
  },
  artists: {
    1: {
      id: 1
      name: "Blink 182",
      genre: "Pop Punk"
    }
  },
  playlists: {
    1: {
      id: 1,
      name: "Best of 2000s",
      author_id: 1
    }
  }
