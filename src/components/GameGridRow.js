import React from 'react';
import Tile from './Tile'

const GameGridRow = (props) => {

  const createRow = props.rowArray.map((tileValue) =>{
    return(
      <div className="tile" >
      <Tile tile={tileValue}/>
      </div>
    )
  })

  return(
    createRow
  )
}

export default GameGridRow;
