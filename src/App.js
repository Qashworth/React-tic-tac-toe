import * as React from 'react'

function Square() {
  <button className="square">1</button>
}

export default function Board() {
  return (
      <fragments>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </fragments>
  );
}
