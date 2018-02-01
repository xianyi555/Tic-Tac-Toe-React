import React, { Component } from 'react';
import logo from './logo.png';
import GameBoard from './GameBoard';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="content">
          <div id="nav">
            <div id="logo"><img src={logo} alt="Tic Tac Toe logo" /></div>
            <div id="title"><h2>Enjoy the Game</h2></div>
          </div>
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App;

