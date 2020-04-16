import React from 'react';
import './App.css';
import PokeCards from './components/PokeCards'

function App() {
  return (
    <div className="App">
      <h1>Kanto Pokedex</h1>     
        <PokeCards />
    </div>
  );
}

export default App;
