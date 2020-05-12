import React from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore, combineReducers, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialMovies = {
  listName: 'Favourite Movies',
  list: [
    'Matrix', 'Rambo III', 'Hakerzy',
  ]
};

const initialActors = {
  listName: 'Best Actors',
  list: [
    'Tom Hanks', 'Julia Roberts', 'AngelinaRoberts'
  ]
};

function movies(state = initialMovies, action) {
  let index = null;
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state, list: [...state.list, action.item]
      };
    case 'DELETE_MOVIE':
      index = state.list.indexOf(action.item);
      if (index !== -1) state.list.splice(index, 1);
      return {
        ...state
      };
    case 'UPDATE_MOVIE':
      index = state.list.indexOf(action.oldItem, 0);
      if (index !== -1) state.list[index] = action.newItem;
      return {
        ...state
      };
    case 'RESET_MOVIES':
      return {...state, list: []};
    default:
      return state
  }
}

function actors(state = initialActors, action) {
  let index = null;
  switch (action.type) {
    case 'ADD_ACTOR':
      return {
        ...state, list: [...state.list, action.item]
      };
    case 'DELETE_ACTOR':
      index = state.list.indexOf(action.item);
      if (index !== -1) state.list.splice(index, 1);
      return {
        ...state
      };
    case 'UPDATE_ACTOR':
      index = state.list.indexOf(action.oldItem, 0);
      if (index !== -1) state.list[index] = action.newItem;
      return {
        ...state
      };
    case 'RESET_ACTORS':
      return {...state, list: []};
    default:
      return state
  }
}

const allReducers = combineReducers({movies, actors});
const store = createStore(allReducers, composeWithDevTools());

// MOVIES CREATORS
const addMovie = item => ({type: 'ADD_MOVIE', item});
const deleteMovie = item => ({type: 'DELETE_MOVIE', item});
const updateMovie = (oldItem, newItem) => ({type: 'UPDATE_MOVIE', oldItem, newItem});
const resetMovies = () => ({type: 'RESET_MOVIES'});

const moviesActions = bindActionCreators({
  add: addMovie,
  reset: resetMovies,
  delete: deleteMovie,
  update: updateMovie,
}, store.dispatch);

// ACTORS CREATORS
const addActor = item => ({type: 'ADD_ACTOR', item});
const deleteActor = item => ({type: 'DELETE_ACTOR', item});
const updateActor = (oldItem, newItem) => ({type: 'UPDATE_ACTOR', oldItem, newItem});
const resetActors = () => ({type: 'RESET_ACTORS'});

const actorsActions = bindActionCreators({
  add: addActor,
  reset: resetActors,
  delete: deleteActor,
  update: updateActor
}, store.dispatch);


// EXAMPLES MOVIES
store.dispatch(addMovie('Szybcy wsciekli'));
moviesActions.add('Ogniem i mieczem');
moviesActions.reset();
moviesActions.add('Arroy');
moviesActions.update('Arroy', 'Arrow');

// EXAMPLES ACTORS
store.dispatch(addActor('Cezary Pazura'));
actorsActions.add('Anna Dymna');
actorsActions.reset();
actorsActions.add('Anna Dymana');
actorsActions.update('Anna Dymana', 'Anna Dymna');

window.store = store;


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
