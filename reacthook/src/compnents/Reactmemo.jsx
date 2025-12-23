import React, { useState,memo } from 'react'

const Child=memo(({name})=>{
    console.log("child component rerender with same props",name)
    return(

        <>
        <h1>name:{name}</h1>
        </>
    )
})

function Reactmemo() {
    const [count,setCount]=useState(0)
    const [username,setname]=useState("shubham")
  return (
    <div>
<h1>count:{count}</h1>
<button onClick={()=>setCount((prev)=>{
    if(prev==10){
        setname("karan")
    }
    return prev+1;
    
})}>inc count</button>
<Child name={username}/>
    </div>
  )
}

// react memo are heiher order component that wrap the component and tells react the only re-render when props change ohterwisw return ame vale
// generally what happen when parent component re-render child componet also re-render to avoid this we use react memo
export default Reactmemo