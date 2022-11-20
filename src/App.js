import './App.css';
import React from 'react';
import Rote from './Router';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Rote/>
    </React.Fragment>    
  );
}

export default App;