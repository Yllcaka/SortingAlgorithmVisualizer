import React, { useState } from 'react';

import graph from '../../api/graph';
import Square from './Square';

const Grid = ({ heigth, width }) => {
  const [isClicked, setClicked] = useState(false);
  const [remove, setRemove] = useState(false);
  let graphThing = graph(2, 2);
  const draw = () => {
    setClicked(true);
  };
  const stopDraw = () => {
    setClicked(false);
  };

  var list = [];
  for (let row = 0; row < heigth; row++) {
    list[row] = [];
    for (let col = 0; col < width; col++) {
      list[row][col] = 0;
    }
  }
  return (
    <div>
      <div
        draggable={false}
        onMouseDown={draw}
        onMouseUp={stopDraw}
        style={{ alignSelf: "center", border: "1px solid #70c2cf" }}
      >
        {list.map((row, rIndex) => {
          return (
            <div
              key={rIndex}
              style={{ fontSize: 0 }}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            >
              {row.map((col, cIndex) => (
                <Square
                  draw={isClicked}
                  remove={remove}
                  draggable={false}
                  key={rIndex.toString() + " " + cIndex.toString()}
                />
              ))}
            </div>
          );
        })}
      </div>
      <button onClick={() => setRemove(false)}>Build Wall</button>
      <button onClick={() => setRemove(true)}>Remove Wall</button>
      <button onClick={() => graphThing.bfs("0 0")}>graph</button>
    </div>
  );
};
export default Grid;
