import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';

const App = () => (
  <div className="App">
    <div className="logo">
      <img className="logo_wakfu2" src="/images/Wakfu2.png"></img>
    </div>
    <Monster />
    <br></br>
    <section className="container-fluid">
      <PlayerList />
    </section>
  </div>
);

export default App;