import React from 'react';
import Tile from './Tile'

const GameGridRow = (props) => {

  const createRow = props.rowArray.map((tileValue, index) =>{
    return(
      <div className="tile" key={index}>
      <Tile tile={tileValue} rowNumber={props.rowNumber} tileNumber={index} handleButtonClick={props.handleButtonClick}/>
      </div>
    )
  })

  return(
    createRow
  )
}

export default GameGridRow;
