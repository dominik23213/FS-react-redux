import { combineReducers } from 'redux';
import actorsReducer from './actors/duck';
import moviesReducer from './movies/duck'

const rootReducer = combineReducers({
	actors: actorsReducer,
	movies: moviesReducer,
});

export default rootReducer;
