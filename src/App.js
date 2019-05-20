import React from 'react';
import logo from './logo.png';
import './App.css';

import Tilt from "react-tilt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Strona w budowie...
        </p>
        <a
          className="App-link"
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tilt className="Tilt" options={{ max : 40, glare: true, maxGlare: 0.5 }} >
 <div className="Tilt-inner"> O NAS </div>
</Tilt>
        </a>
      </header>
      <div class="image-footer"></div>
    </div>
  );
}

export default App;
