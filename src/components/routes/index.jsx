import React from 'react';

import { Switch } from 'react-router-dom';
import Login from '../Login';
import Route from './route';

const Routes = () => {
  return (
    <Switch>
      <Route exact to="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
