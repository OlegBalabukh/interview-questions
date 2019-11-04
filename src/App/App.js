import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Home/Home';
import CSSQuestions from '../CSSQuestions/CSSQuestions';
import HTMLQuestions from '../HTMLQuestions/HTMLQuestions';
import ReduxQuestions from '../ReduxQuestions/ReduxQuestions';
import ReactQuestions from '../ReactQuestions/ReactQuestions';
import JSQuestions from '../JSQuestions/JSQuestions';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import reduxLogo from '../assets/redux-logo.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import homeLogo from '../assets/home-logo.png';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="jumbotron">
        <nav className="nav justify-content-center">
          <ul>
            <li className="navbar-brand">
              <Link to="/">
                <img src={homeLogo} id="home" alt="home"/>
              </Link>
            </li>
            <li className="navbar-brand">
              <Link to="/js">
                <img src={jsLogo} id="js" alt="js"/>
              </Link>
            </li>
            <li className="navbar-brand">
              <Link to="/react">
                <img src={reactLogo} id="react" alt="react"/>
              </Link>
            </li>
            <li className="navbar-brand">
              <Link to="/redux">
                <img src={reduxLogo} id="redux" alt="redux"/>
              </Link>
            </li>
            <li className="navbar-brand">
              <Link to="/html">
                <img src={htmlLogo} id="html" alt="html"/>
              </Link>
            </li>
            <li className="navbar-brand">
              <Link to="/css">
                <img src={cssLogo} id="css" alt="css"/>
              </Link>
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