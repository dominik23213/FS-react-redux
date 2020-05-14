import React from 'react';
import './App.css';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import ActorsContainer from "./app/actors/components/ActorsContainer";
import MoviesForm from "./app/movies/components/MoviesForm";

function App() {
  return (
    <div className="App">
     <MoviesContainer />
     <MoviesForm />
     <ActorsContainer />
    </div>
  );
}

export default App;
