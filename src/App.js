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
          Mark off the numbers as they're called out and aim to complete rows, columns, or diagonals to win big. 
          Whether you're a seasoned bingo pro or a newcomer, DuoBingo offers endless fun for players of all skill levels. Let the game begin!
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
