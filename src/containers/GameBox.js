import React from 'react';
import Header from '../components/Header';
import GameGrid from '../components/GameGrid';

class GameBox extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        grid: [["X","X","X"],["X","X","X"],["X","X","X"]]
      }
    }

  render() {

    return (
      <div>
      <Header title='Play Tic Tac Toe'/>
      <GameGrid gameGrid={this.state.grid}/>
    </div>

    )
  }
}

export default GameBox;
