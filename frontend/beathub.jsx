import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import { searchMusic } from './util/search_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllUsers } from './util/users_api_util';

window.fetchAllUsers = fetchAllUsers;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
