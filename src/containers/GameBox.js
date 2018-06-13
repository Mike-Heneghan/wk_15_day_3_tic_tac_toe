import React from 'react';
import Header from '../components/Header';
import GameGrid from '../components/GameGrid';

class GameBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grid: [[" "," "," "],[" "," "," "],[" "," "," "]],
      turnNumber: 1
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(event){
    const coordinates = event.target.value
    const yCoord = coordinates[0]
    const xCoord = coordinates[2]
    const newGrid = this.state.grid

    if ( newGrid[yCoord][xCoord] != " "){
      return
    }

    if(this.state.turnNumber %2 !== 0){
      newGrid[yCoord][xCoord] = "X"}
    else {
        newGrid[yCoord][xCoord] = "0"
      }
    this.setState({grid: newGrid})
    this.setState(prevState => {turnNumber: (prevState.turnNumber ++)})
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
