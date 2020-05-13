import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './app/reducers';

import { moviesActions} from "./app/movies/duck";
import { actorsActions } from './app/actors/duck';

const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

// MOVIES
store.dispatch(
  moviesActions.add('Rambo V')
);

store.dispatch(
  moviesActions.reset()
);

store.dispatch(
  moviesActions.add('Rambo V')
);

store.dispatch(
  moviesActions.update('Rambo V', 'Rambo IV')
);

// ACTORS
store.dispatch(
  actorsActions.add('Angelina Merkel')
);

store.dispatch(
  actorsActions.reset()
);

store.dispatch(
  actorsActions.add('Jonatan Rambo')
);

store.dispatch(
  actorsActions.update('Jonatan Rambo', 'John Rambo')
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
