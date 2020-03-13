import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MicroFrontend from "./MicroFrontend";
import TestComp from "./TestComp";

function App() {
  const {
    REACT_APP_CHESS: chessHost,
  } = process.env;

  const Chessgame = ({ history }) => (
    <MicroFrontend history={history} name="Chess" host={chessHost} />
  );

  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/test" component={TestComp} />
          <Route exact path="/chessgame" component={Chessgame} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>

/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
