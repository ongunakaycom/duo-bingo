import React from 'react';
import './App.css';
import Header from './Header';
import DuobingoLogo from './duobingo.svg'; 

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={DuobingoLogo} className="App-logo" alt="logo" style={{ animation: 'none' }} /> {/* */}
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
