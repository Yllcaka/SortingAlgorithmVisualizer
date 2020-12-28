import { useState } from 'react';

const Square = ({ draw, remove }) => {
  var [color, setColor] = useState(null);

  const removeWall = () => {
    if (draw) setColor(null);
  };
  const buildWall = () => {
    if (draw) setColor("black");
  };
  const placeWall = () => {
    setColor("black");
  };

  return (
    <div
      onMouseOver={remove ? removeWall : buildWall}
      onMouseDown={placeWall}
      style={{
        backgroundColor: color,
        display: "inline-block",
        width: "20px",
        height: "20px",
        margin: 0,
        padding: 0,
        border: "1px solid " + (color !== null ? color : "#70c2cf"),
      }}
    ></div>
  );
};

export default Square;
