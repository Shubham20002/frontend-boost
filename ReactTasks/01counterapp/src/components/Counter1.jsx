import React from 'react'
import { useState } from 'react';

function Counter1() {
   const [count,setCount]=useState(0);
  const [timer,setTimer]=useState(null);

  const startCounter=()=>{
    if(timer !==null) return 
  let timer1= setInterval(()=>{
      setCount((prev)=>prev+1)
    },1000)
    setTimer(timer1)
  }
  const pauseCounter=()=>{
    clearInterval(timer)
    setTimer(null)
  }

  const restartTimer=()=>{
    clearInterval(timer)
     setTimer(null)
    setCount(0)
  }
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={()=>startCounter()}>Start</button>
      <button onClick={()=>pauseCounter()}>Pause</button>
      <button onClick={()=>restartTimer()}>Restart</button>
    <button></button>
    </div>
  )
}

export default Counter1