import React from 'react';
import Tile from './Tile';
import GameGridRow from './GameGridRow'

const GameGrid = (props) =>{

  const renderRow = props.gameGrid.map((row, index) =>{
    return (
    <div className="game-row" key={index}>
      <GameGridRow rowArray={row} rowNumber={index}  handleButtonClick={props.handleButtonClick}/>
    </div>
  )
  })

  return (

    <div className="game-grid">
      <div>
        {renderRow}
      </div>
    </div>
  )
}


export default GameGrid;
