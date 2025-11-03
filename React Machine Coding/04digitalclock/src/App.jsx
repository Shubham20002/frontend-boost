import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [time,setime]=useState(new Date())
  
  useEffect(()=>{
   const timer= setInterval(()=>{
    const time=new Date()
    console.log("time",time)
    setime(time)
    },1000)
  return () => clearInterval(timer);
  },[])

  const handleformattimer=(time)=>{
    const hour=String(time.getHours()).padStart(2,"0");
    const minutes=time.getMinutes();
    const second=String(time.getSeconds()).padStart(2,"0");

    return `${hour}:${minutes}:${second}`

  }
  return (
    <>
    <h1>Digital Clock</h1>
    <p>Time:{handleformattimer(time)} </p>

    </>
  )
}

export default App