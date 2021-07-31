import React, { useState } from "react";
import "../styles/Counter.css"

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

//   let number = 0;

//   const Plus = () => {
//     const preNum = preNum + 1;
//     setNumber(preNum);
//   };
  return (
    <>
      <div id="Button">
          <button style={{color:"green"}} onClick={ () => setNumber( number + 1)}>plus</button>
          <button>{number}</button>
          <button  style={{color:"red"}} onClick={ () => setNumber( number - 1)}>minus</button> <br />
          <button style={{color:"green"}} onClick={ () => setNumber2( number2 + 2)}>plus</button>
          <button>{number2}</button> 
          <button style={{color:"red"}} onClick={ () => setNumber2( number2 - 2)}>minus</button> <br />
          <button style={{color:"green"}} onClick={ () => setNumber3( number3 + 3)}>plus</button>
          <button>{number3}</button> 
          <button style={{color:"red"}} onClick={ () => setNumber3( number3 - 3)}>minus</button> <br />
          <button style={{color:"green"}} onClick={ () => setNumber4( number4 + 4)}>plus</button>
          <button>{number4}</button> 
          <button style={{color:"red"}} onClick={ () => setNumber4( number4 - 4)}>minus</button>
      </div>
    </>
  );
}
