import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/user/:name" component={About} />
  </Switch>
);

export default Router;
