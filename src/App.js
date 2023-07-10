import React, { StrictMode } from "react";

import { useState } from "react";

// had to stray from the tutorial instructions, added a div instead of fragments to get around a compiling error
// used a class name of boardRow instead of the original board-row
function Square (){
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }

  return <button className="square" onClick={handleClick}>{value}</button> 
}
export default function Board() {
  return (
    <div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardRow">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}