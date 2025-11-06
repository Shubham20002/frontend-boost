import React, { useMemo, useState } from 'react'

function Memo() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');

    // const doubble=useMemo(()=>{
    //     console.log("doublle recalculated")
    //     return count*2
    // },[count])
  

     const doubble=()=>{
        console.log("doublle recalculated")
        return count*2
    }
    
  return (
    <>
    <h1>count:{count}</h1>
    <h1>doublle:{doubble()}</h1>
    <button onClick={()=>setCount((prev)=>prev+1)}>inc</button>
    <input onChange={(e)=>setText(e.target.value)} value={text}/>

    </>
  )
}

export default Memo