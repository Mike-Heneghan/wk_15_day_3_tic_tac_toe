import React from 'react';

const Tile = (props) => {

  const handleClick = (event) => {
    console.log("I have been clicked");
    props.handleButtonClick(event);
  }

  return(
    <button onClick={handleClick} value={[props.rowNumber, props.tileNumber]}
      >{props.tile}</button>
  )
}


export default Tile;
