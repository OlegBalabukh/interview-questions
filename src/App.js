import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import jsLogo from './assets/js-logo.png';
import reactLogo from './assets/react-logo.png';
import reduxLogo from './assets/redux-logo.png';
import htmlLogo from './assets/html-logo.png';
import cssLogo from './assets/css-logo.png';
import homeLogo from './assets/home-logo.png';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav justify-content-center">
          <ul>
            <li className="navbar-brand">
              <Link to="/"><img src={homeLogo} width="30" height="30" alt=""/></Link>
            </li>
            <li className="navbar-brand">
            <Link to="/js"><img src={jsLogo} width="60" height="60" alt=""/></Link>
            </li>
            <li className="navbar-brand">
              <Link to="/react"><img src={reactLogo} width="55" height="55" alt=""/></Link>
            </li>
            <li className="navbar-brand">
              <Link to="/redux"><img src={reduxLogo} width="45" height="45" alt=""/></Link>
            </li>
            <li className="navbar-brand">
              <Link to="/html"><img src={htmlLogo} width="55" height="55" alt=""/></Link>
            </li>
            <li className="navbar-brand">
              <Link to="/css"><img src={cssLogo} width="55" height="55" alt=""/></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>          
          <Route path="/react">
            <ReactQuestions />
          </Route>
          <Route path="/redux">
            <ReduxQuestions/>
          </Route>
          <Route path="/js">
            <JSQuestions />
          </Route>
          <Route path="/html">
            <HTMLQuestions />
          </Route>
          <Route path="/css">
            <CSSQuestions />
          </Route>
          <Route path="/">
            <Home />
          </Route>         
        </Switch>
      </div>
    </Router>
  );
}

function JSQuestions() {
  return <h2>JS</h2>;
}

function ReactQuestions() {
  return <h2>React</h2>;
}

function ReduxQuestions() {
  return <h2>Redux</h2>;
}

function HTMLQuestions() {
  return <h2>HTML</h2>;
}

function CSSQuestions() {
  return <h2>CSS</h2>;
}

function Home() {
  return <h2>INTERVIEW QUESTIONS</h2>;
}
