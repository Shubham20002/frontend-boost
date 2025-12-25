import React, { useRef, useState } from 'react'

function Counter2() {
    const [count,setCount]=useState(0);
    const timerRef=useRef(null)

    const startCounter=()=>{
        if(timerRef.current!==null)return
        timerRef.current= setInterval(()=>{
            setCount((prev)=>prev+1)
         },1000)
    }

    const pauseCounter=()=>{
        clearInterval(timerRef.current)
        timerRef.current=null
    }
     const restartCounter=()=>{
        clearInterval(timerRef.current)
        timerRef.current=null
        setCount(0)

     }
  return (
   <div>
    <h1>count:{count}</h1>
    <button onClick={()=>startCounter()}>Start</button>
    <button onClick={()=>pauseCounter()}>Pause</button>
    <button onClick={()=>restartCounter()}>Restart</button>
   </div>
  )
}

export default Counter2