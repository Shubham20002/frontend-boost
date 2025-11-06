import React, { useEffect, useState,useCallback } from 'react'

function Callback() {
    const [count,setcount]=useState(0);
    const [text,setText]=useState("");

    const logcount= useCallback(function(){
      console.log("count is",count);
    },[count])

    useEffect(()=>{
      logcount()
    },[logcount])
  return (
  <>
  <h1>count:{count}</h1>
  <button onClick={()=>setcount((prev)=>prev+1)}>inc</button>
  <input onChange={(e)=>setText(e.target.value)} value={text}/>
  </>
  )
}

export default Callback

// 1)usecallback memorize the function ref
// 2)return same function ref untile dependancy doesnt change
// 3)generally with every re-render new function refrance get created to avoid this we use usecallback