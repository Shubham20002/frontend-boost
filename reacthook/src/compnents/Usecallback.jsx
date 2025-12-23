import React, { useState,useCallback, useEffect,useMemo} from 'react'

function Usecallback() {
const [count,setCount]=useState(0);
const [input,setInput]=useState("")

const printcount=useCallback(()=>{
    console.log("count",count);
},[count])

const double=useMemo(()=>{
    console.log("doube function get called")
  return count*2
},[count])
useEffect(()=>{
    printcount()
},[printcount])
  return (
    <>
<h1>count:{count}</h1>
<h2>double:{double}</h2>
<button onClick={()=>setCount((prev)=>prev+1)}>inc count</button>
<input value={input} onChange={(e)=>setInput(e.target.value)}/>
    </>
  )
}

//usecallback is react hook that that use to memorise function ref
//it return same function ref untile dependecy is not change
// genreally what happen when component re-render new function ref get created everytime to avoid this we use 


export default Usecallback