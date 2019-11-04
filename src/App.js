import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/js">JS</Link>
            </li>
            <li>
              <Link to="/react">React</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
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
