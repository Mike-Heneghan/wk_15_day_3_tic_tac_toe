import React from 'react';
import Header from '../components/Header';
import GameGrid from '../components/GameGrid';

class GameBox extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        grid: [[" ","X "," "],[" "," "," "],[" "," "," "]]
      }

      this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(event){
      const coordinates = event.target.value
      const yCoord = coordinates[0]
      const xCoord = coordinates[2]
      console.log("x", xCoord);
      console.log("y", yCoord);
      const newGrid = this.state.grid;
      console.table(newGrid);

      newGrid[yCoord][xCoord] = "X";

      console.table(newGrid);
      this.setState({grid: newGrid})

    }

  render() {

    return (
      <div>
      <Header title='Play Tic Tac Toe'/>
      <GameGrid gameGrid={this.state.grid} handleButtonClick={this.handleButtonClick}/>
    </div>

    )
  }
}

export default GameBox;
