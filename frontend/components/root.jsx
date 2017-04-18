import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import React from 'react';
import App from './app';
import SignUpContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import HomeContainer from './main/home_container';

const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser){
    replace('/login');
  }
};

const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } >
        <Route path='signup' component={ SignUpContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path='login' component={ LoginContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path='home' component={ HomeContainer } onEnter={_ensureLoggedIn}/>
      </Route>
    </Router>
  </Provider>
);


export default Root;
