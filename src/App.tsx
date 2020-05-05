import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReactRouter from './Router';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <h1>Footer</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>

      <h1>Top page Layout</h1>
      <ReactRouter />

      <h1>Footer</h1>
      <Link to="/user/hoge">hogeユーザー</Link>
    </Router>
  </div>
);

export default App;
