import React from 'react';
import Header from '../components/Header';
import GameGrid from '../components/GameGrid';

class GameBox extends React.Component {

  render() {

    return (
      <div>
      <Header title='Play Tic Tac Toe'/>
      <GameGrid />
    </div>

    )
  }
}

export default GameBox;
