import React from 'react';
import './App.sass';
import Cards from './components/Cards/Cards';
import Dropdown from './components/Dropdown/Dropdown';
import Period from './components/Period/Period';

function App() {
  return (
    <div className="wrap">
      <div className="manage">
        <Dropdown />
        <Period />
      </div>
      <Cards />
    </div>
  );
}

export default App;
