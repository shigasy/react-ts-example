import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Router>
      <h1>Link</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>

      <h1>Top page route</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  </div>
);

export default App;
