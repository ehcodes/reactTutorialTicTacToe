import React, { StrictMode } from "react";
// had to stray from the tutorial instructions, added a div instead of fragments to get around a compiling error
// used a class name of boardRow instead of the original board-row
function Square ({ value }){
  
  function handleClick(){
    console.log(`Clicked! ${value}`);
  }

  return <button className="square" onClick={handleClick}>{value}</button> 
}
export default function Board() {
  return (
    <div>
      <div className="boardRow">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="boardRow">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="boardRow">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </div>
  );
}