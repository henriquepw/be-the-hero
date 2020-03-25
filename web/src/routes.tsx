import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Logon} exact />
      <Route path="/register" component={Register} />
      <Route path="/Profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
