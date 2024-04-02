import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to DuoBingo! Get ready to challenge your friends or play solo in this exciting bingo experience.
        </p>

        <a
          className="App-link"
          href="https://duo-bingo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to DuoBingo!
        </a>
      </header>
    </div>
  );
}

export default App;
