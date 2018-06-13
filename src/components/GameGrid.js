import React from 'react';
import Tile from './Tile';

const GameGrid = (props) =>{

  const renderTiles = 

  return (
    <div className="game-grid">
      <div className="game-row">
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
      </div>
      <div className="game-row">
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
      </div>
      <div className = "game-row">
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
        <div className="tile">
          <Tile />
        </div>
      </div>
    </div>
  )
}


export default GameGrid;
