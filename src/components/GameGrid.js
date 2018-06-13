import React from 'react';
import Tile from './Tile';
import GameGridRow from './GameGridRow'

const GameGrid = (props) =>{

  const renderRow = props.gameGrid.map((row) =>{
    return (
    <div className="game-row">
      <GameGridRow rowArray={row}/>
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
