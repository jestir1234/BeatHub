import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import React from 'react';
import App from './app';
import SignUpContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } >
        <Route path='signup' component={ SignUpContainer } />
        <Route path='login' component={ LoginContainer }/>
      </Route>
    </Router>
  </Provider>
);


export default Root;
