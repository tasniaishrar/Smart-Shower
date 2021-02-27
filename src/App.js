import logo from './shower.svg';
import './App.css';
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>DropLess</h2>
        <h5>Save more water with less effort</h5>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Switch>
            <Route exact path="/test" render={() => {window.location.href="test.html"}} />
          </Switch>
          <a className="App-link" target="_blank" href={process.env.PUBLIC_URL + "test.html"} > Log in</a> to view your daily, weekly, and monthly water consumption reports and insights. 
        </p>
        <p>
        Don't have an account? <Switch><Route exact path="/test" render={() => {window.location.href="test.html"}} /></Switch><a className="App-link" target="_blank" href={process.env.PUBLIC_URL + "test.html"} >Sign up</a> today!
        </p>
      </header>
    </div>
  );
}

export default App;
