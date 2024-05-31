// import logo from './mountain.png';
// import './App.css';

import { useState } from "react";

function App() {
  const [state,setstate]=useState(0)
  let increase=()=>{
    setstate(state+1)
  }
  let decrease=()=>{
    setstate(state-1)
  }
  return (
    <div className="text-center">
      <h1 className="mt-1">Counter</h1>
      <div className="d-flex justify-content-center mt-3 align-items-center gap-5">
        <button id="minusBtn" className="btn btn-primary fs-1 px-5" onClick={decrease} disabled={state === 0 ? true : false}>-</button>
        <h1>{state}</h1>
        <button className="btn btn-primary fs-1 px-5" onClick={increase}>+</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
