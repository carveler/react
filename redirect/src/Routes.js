import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import LoggedIn from './LoggedIn';
import TryAgain from './TryAgain';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/loggedIn' component={LoggedIn} />
      <Route path='/tryAgain' component={TryAgain} />
    </Switch>
  </Router>
);
export default Routes;
